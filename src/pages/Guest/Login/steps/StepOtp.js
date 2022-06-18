import Button from "../../../../components/Button/Button"
import Card from "../../../../components/Card/Card"


function StepOtp() {
  return (
    <Card>
      {/* card topbaar */}
      <div className="title flex items-start justify-center space-x-2">
        <img src="images/otp-moji.svg" alt="" />
        <p className='font-semibold text-white font-nunito w-44 text-center'>Enter the code we just texted you</p>
      </div>

      {/* card content  */}
      <div className="input-box flex justify-start items-center h-10 rounded-md m-10
                mb-3 bg-input-box w-auto p-2">
        <img className="w-9 mr-2" src="images/phone-inp.svg" alt="" />
        <input maxLength={10} className="w-[171px] caret-white text-white text-base bg-transparent outline-none font-semibold font-nunito" placeholder="1234567890" type="number" />
      </div>
      <span className="text-sm block mx-auto font-semibold font-nunito text-[#C4C5C5] text-center">Didn't receive? Tap to resend</span>

      <Button path={"images/right_arrow.svg"} text={"Next"} />
    </Card>
  )
}

export default StepOtp