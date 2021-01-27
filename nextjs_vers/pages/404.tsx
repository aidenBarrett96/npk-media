import Button from "../components/utilities/button"
import CircleLinkWithCaption from "../components/utilities/circleLinkWithCaption"
import Layout from "../layout/layout"


// Basic styles required so their in global.scss instead of a module
const Custom404 = () => {
  return (
    <Layout>
      <div className="notFoundWrap">
        <img src="/placeholder.png" />

        <div className="notFoundInner">
          <h1>Cut</h1>
          <p>Sorry, we can't find that page.</p>
          <Button 
            text="GO HOME"
            link="/"
            large
          />
        </div>
      </div>
    </Layout>
  )
}
export default Custom404