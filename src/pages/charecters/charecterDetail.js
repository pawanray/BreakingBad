import React, { useEffect, useState, useContext } from 'react';
import Apis from '../../services/apis'
import StyledContainer from '../../components/styled/Container.styled';
import { StyledFlex } from '../../components/styled/Flex.styled';
import {
    useHistory,
    useParams
} from "react-router-dom";
import Loader from '../../components/Ui/Loader';
const CharecterDetail = () => {
    let { char_id } = useParams();
    let history = useHistory();
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchCharecterById(char_id)
    }, [char_id])

    const fetchCharecterById = (id) => {
        setLoading(true);
        Apis.getCharacterById(id).then(res => {
            setLoading(false);
            setData(res.data)
        }).catch(err => {
            setLoading(false);
            console.log(err)
        })
    }
    return (
        <>
            <StyledContainer>
                <button onClick={() => history.goBack()}>Back</button>
                {data.length > 0 && (
                    <StyledFlex className='detail-box'>
                        <img className='user-img' src={data[0].img} />
                        <div>
                            <div className='username'>{data[0].name} <span style={{ fontSize: 14, color: '#ccc' }}>({data[0].nickname})</span></div>
                            <div className='text-caption'>{data[0].birthday}</div>
                            <div className="badge" style={{ background: data[0].status === "Deceased" ? "red" : 'green' }}>{data[0].status}</div>
                            <div>{data[0].portrayed}</div>
                            {data[0].occupation.map(occup => <span className='tags'>{occup}</span>)}
                        </div>
                    </StyledFlex>
                )}
            </StyledContainer>
            {loading && (<Loader />)}
        </>
    )
}

export default CharecterDetail