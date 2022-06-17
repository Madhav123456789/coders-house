import Button from '../../../components/Button/Button'
import Card from '../../../components/Card/Card'

function Home() {
  return (
    <div className='home-page h-[84vh]  flex  justify-center items-center'>
      <Card>
        {/* card topbaar */}
        <div className="title flex items-center whitespace-nowrap  justify-center space-x-2">
          <img src="/nav_icon.svg" alt="" />
          <p className='font-semibold text-white'>Welcome to Coders House</p>
        </div>

        {/* card content  */}
        <p className="content text-[#ffffffa3] px-7 xl:w-3/4 text-center mt-4 m-auto xl:pl-[5rem] xl:pr-[5rem]">
          {'We’re working hard to get Codershouse ready for everyone! While we wrap up the finishing youches, we’re adding people gradually to make sure nothing breaks :)'}
        </p>

        <Button path={"images/right_arrow.svg"} text={"Get Logged In"}/>

      </Card>
    </div>
  )
}

export default Home