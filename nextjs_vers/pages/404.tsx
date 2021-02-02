import Button from "../components/utilities/button/button"
import Layout from "../layout/layout"


// Basic styles required so their in global.scss instead of a module
const Custom404 = () => {
  return (
    <Layout>
      <div className="notFoundWrap">
        <div className="notFoundImg">
          <img src="/404.svg" />
        </div>
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