import * as S from './styles'

interface Prop {
    isloading: boolean
}

function LoadScreen({ isloading }: Prop) {


    return (
        <S.Wrapper style={{display: isloading ? 'flex' : 'none'}}>
            <h1>Carregando (isso pode levar um tempo)</h1>
        </S.Wrapper>
    )
}

export default LoadScreen