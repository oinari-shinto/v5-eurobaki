import * as React from "react"
import Layout from "../layouts/MainLayout"
import Seo from "../components/Seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" description="Страница не найдена"/>
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
