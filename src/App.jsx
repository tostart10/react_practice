import './App.css'
//생활코딩 5강
/* 이미 만들어진 repl에서 깃 연동하기
https://velog.io/@jeong011010/%EA%B5%B0%EB%8C%80%EC%97%90%EC%84%9C-REACT-%EA%B3%B5%EB%B6%80%ED%95%98%EB%8A%94-%EC%82%AC%EB%9E%8C
*/

function Header(props){
  return <header>
    <h1><a href="/">{props.title}</a></h1>
  </header>
}

function Nav(props){
  const lis= []
  //밑에서 선언된 변수 topics의 개수(legnth)만큼 돌게됨
  //변수 topic리스트 안에는 3개가 들어가있으니까 3번 돌면서 lis.push()를 통해 리스트 lis에 3개를 넣어주게됨
  for(let i=0; i<props.topics.length; i++){
    let t = props.topics[i];
    lis.push(<li key={t.id}><a href={'/read/'+t.id}>{t.title}</a></li>) //lis 리스트에 넣음
    /*동적으로 만들어주는 태그들은({}로 만들어지는 태그들) 각자 키라는 prop을 가지고 있어야함  그리고 키라는 prop값은 각각 반복문 안에서 고유해야함
    리액트에서는 자동으로 생성한 태그의 경우에는 리액트가 태그들을 추적하는 근거로서 key라는 약속된 prop을 줌으로서 리액트가 추적할 수 있도록 해주는것임
  (태그에 고유한 키값을 줘야함 key={t.id})
  */
  }
  return <nav>
    <ol>
      {lis}
    </ol>
  </nav>
}


function Article(props){
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>
}




export default function App() {

  //변수 선언(변수는 함수안에서 바뀌지 않음, const를 붙이면 값을 바꿀수 없게됨)
//배열 안에는 객체를 넣는것이 좋기 때문에{}로 넣기
  const topics = [
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'}
  ] //배열
  return (
    <main>
      <Header title="WEB"></Header>
      <p>=====================</p>
      <Nav topics={topics}></Nav>
      <p>=====================</p>
      <Article title="Welcome" body="Hello"></Article>
      
    </main>
  )
}
