import * as S from './styles'

function App() {
  return (
    <S.Container>
      <S.LogInInfo>
        <S.Logo src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjUSXHcFx8iQmHoULViI9o7QzLJlH95nEfIA&s" alt="website logo" />

        <S.ImageDiv>
          <S.Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjUSXHcFx8iQmHoULViI9o7QzLJlH95nEfIA&s" alt="username" />
          <input type="email" placeholder='EMAIL'/>
        </S.ImageDiv>
        <S.ImageDiv>
          <S.Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjUSXHcFx8iQmHoULViI9o7QzLJlH95nEfIA&s" alt="password" />
          <input type="password" placeholder='PASSWORD'/>
        </S.ImageDiv>

        <S.ValidateForm>LOGIN</S.ValidateForm>
        <S.CreateAccount>
          <button>Create account</button>
        </S.CreateAccount>
      </S.LogInInfo>
    </S.Container>
  )
}

export default App
