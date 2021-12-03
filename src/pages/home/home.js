import React, { useEffect, useState, useContext } from 'react';
import StyledContainer from '../../components/styled/Container.styled';
import { StyledFlex } from '../../components/styled/Flex.styled';
import {
    Link,
} from "react-router-dom";
import Card from '../../components/Ui/Card';
import Pagination from '../../components/Ui/Pagination';
import Loader from '../../components/Ui/Loader';
import UseAxios from '../../components/CustomHooks/UseAxios';
import Apis from '../../services/apis'
import { SearchContext } from '../../Context/SearchContext';
const Home = () => {
    const [data, setData] = useState([]);
    const charectorContext = useContext(SearchContext);
    const [limit, setLimit] = useState(10);
    const [noData, setNoData] = useState(false);
    const [offset, setOffset] = useState(1);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    // const { response, loading, error } = UseAxios({
    //     method: 'get',
    //     url: '/characters',
    //     query:{limit:10,offset:10}
    // });

    let hideColumn = ['char_id', 'portrayed', 'occupation', 'category', 'better_call_saul_appearance', 'appearance', 'birthday', 'nickname'];
    let preferredOrder = ['nickname', 'occupation', 'name']

    // useEffect(() => {
    //     if (response !== null) {
    //         setData(response);
    //         console.log(response)
    //     }
    // }, [response]);


    useEffect(() => {
        let nextOffset = page + "0"
        fetchAllCharacters({ limit, offset: page == 1 ? offset : offset * +nextOffset })
    }, [page]);

    const fetchByName = (name) => {
        setLoading(true);
        Apis.getAllCharacters(name).then(res => {
            setLoading(false);
            setData(res.data)
            setNoData(res.data.length === 0 ? true : false);
        }
        ).catch(err => {
            setLoading(false);
            setNoData(true);
            console.log(err)
        })
    }
    const fetchAllCharacters = (query) => {
        setLoading(true);
        Apis.getAllCharacters(query).then(res => {
            setLoading(false);
            setNoData(res.data.length === 0 ? true : false);
            setData(res.data)
        }).catch(err => {
            setLoading(false);
            setNoData(true);
            console.log(err)
        }
        )
    }

    useEffect(() => {
        if (charectorContext) {
            setTimeout(() => {
                fetchByName({ name: charectorContext })
            }, 2000)
        }
        else {
            fetchAllCharacters({ limit, offset: offset * page })
        }
    }, [charectorContext]);

    return (
        <>
            <StyledContainer>
                <StyledFlex style={{justifyContent:noData && 'center'}}>
                    {data.length > 0 && data.map(res => {
                        return (
                            <Link to={`/character/${res.char_id}`} style={{ width: '25%', textDecoration: 'none' }}> <Card key={res.char_id}
                                preferredOrder={preferredOrder}
                                hideColumn={hideColumn} data={res} /></Link>
                        )
                    })}
                    {noData && <h2>No Data Available</h2>}
                </StyledFlex>
                {data.length > 0 && (<Pagination countOfPages={limit} setPage={setPage} />)}
            </StyledContainer>
            {loading && <Loader />}
        </>
    )
}

export default Home