import { useParams } from 'react-router-dom'

function Topics() {
   //    const params = useParams() // path 파라메터 값을 가져온다
   //    const topicId = params.topicId

   // params = { topicId: 'test' }
   const { topicId } = useParams()
   return (
      <div>
         <h2>Topics</h2>
         <p>{topicId}</p>
      </div>
   )
}

export default Topics
