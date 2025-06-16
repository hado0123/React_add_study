import './App.css'

function JsxComponent() {
   // 6. 닫는 태그가 반드시 있어야 한다.
   //    return (
   //       <>
   //          <input type="text"></input>
   //          <input type="text" />
   //       </>
   //    )
   // 4. 인라인 스타일: JSON객체로 표현
   // 5. 외부 스타일 시트는 className으로 작성
   //    const style = { color: 'red', fontSize: '10px' }
   //    return <div className="test">안녕</div>
   //    return <div style={{ color: 'red', fontSize: '10px' }}>안녕</div>
   // 3. ★조건부 렌더링 연산자
   //  A && B -> A가 true면 B를 렌더링, A가 false면 A를 렌더링
   //  A || B -> A가 true면 A를 렌더링, A가 false면 B를 렌더링
   //    return <div>{'리액트' || <h1>리액트입니다</h1>}</div>
   //    return <div>{'리액트' && <h1>리액트입니다</h1>}</div>
   // 2. {} 중괄호를 이용해서 자바스크립트 표현식을 쓸 수 있다
   //    const name = '리액트'
   //    return (
   //       <>
   //          <h1>{name} 안녕!</h1>
   //          <p>{name === '리액트' ? <span>리액트입니다.</span> : <span>아닙니다.</span>}</p>
   //       </>
   //    )
   // 1. 요소가 2개 이상일때는 반드시 부모요소로 감싸야한다
   //    return (
   //       //   <div>
   //       <>
   //          <h1></h1>
   //          <h1></h1>
   //       </>
   //       //   </div>
   //    )
}

export default JsxComponent
