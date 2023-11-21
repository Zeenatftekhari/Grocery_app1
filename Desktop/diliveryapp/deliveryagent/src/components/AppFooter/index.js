import { Typography } from "antd"
function AppFooter() {
    return <div className="AppFooter">
        <Typography.Link herf = "tel:+123456789">+12345689</Typography.Link>
       
      <Typography.Link href="https://www.google.com" target={"_blank"}>
        Privacy Policy
      </Typography.Link>
      <Typography.Link href="https://www.google.com" target={"_blank"}>
        Terms of Use
      </Typography.Link>
    </div>
}
export default AppFooter