import React, { useEffect, useState} from 'react';
import StyledContainer from '../../components/styled/Container.styled';
import { StyledFlex } from '../../components/styled/Flex.styled';
import EpisodeCard from '../../components/EpisodeCard';
import Loader from '../../components/Ui/Loader';
import Apis from '../../services/apis'

export default function Episodes() {
    const [data, setData] = useState([]);
    const [noData, setNoData] = useState(false);
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        fetchAllCharacters()
    },[])

    const fetchAllEpisodes = (query, charecterDetailArr)=>{
        setLoading(true);
        Apis.getAllEpisodes(query).then(response=>{
            setNoData(response.data.length === 0 ? true : false);
            let resultArr = [];
            response.data.forEach(item => {
              let temp = {
                charactersDetails : [],
                ...item
              };
              item.characters.forEach(name => {
                let obj = charecterDetailArr.find(item => item?.name === name);
                temp.charactersDetails.push(obj);
              });
              resultArr.push(temp)
            });
            
            setData(resultArr.sort((a, b) => a.episode - b.episode));
            setLoading(false);
        }).catch(err=>{
            setNoData(true);
            setLoading(false);
            console.log(err)
        })
    }

    const fetchAllCharacters = (query)=>{
        Apis.getAllCharacters(query).then(async res=>{
            let tempCharecterArr = [];
            tempCharecterArr = res.data.map(d=> {
                return {
                    img:d.img,
                    name:d.name
                }
            }
                );
            await fetchAllEpisodes(null,tempCharecterArr);
        }).catch(err=>{
            console.log(err)
        })
    }
    let hideColumn = ['char_id', 'portrayed', 'occupation', 'category', 'better_call_saul_appearance', 'appearance', 'birthday', 'nickname'];
    let preferredOrder = ['nickname', 'occupation', 'name']
    return (
        <StyledContainer>
            <StyledFlex style={{ justifyContent: noData && 'center' }}>
                {data.length > 0 && data.map(res => {
                    return (
                        <EpisodeCard key={res.char_id} size="25%"
                            data={res}  preferredOrder={preferredOrder}
                            hideColumn={hideColumn} />
                    )
                })}
                {noData && <h2>No Data Available</h2>}
            </StyledFlex>
            {loading && (<Loader/>)}
        </StyledContainer>
    )
}
