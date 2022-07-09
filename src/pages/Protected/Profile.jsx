import { useParams } from "react-router-dom";

function Profile() {
  const params = useParams();
  console.log(params)

  return (
    <div className="text-white text-xl">
      {params.userId}
    </div>
  )
}

export default Profile