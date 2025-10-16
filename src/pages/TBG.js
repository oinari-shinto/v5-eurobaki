import React from "react"
import { Link } from "gatsby"
import Layout from "../layouts/MainLayout"
import Seo from "../components/Seo"
import { Hero } from "../components/Hero"
import ProductsCruwa from "../components/ProductsCruwa"
import Certificates from "../components/CertificatesTBG"
import Stats from "../components/Stats"
import Email from "../components/Email"
import TableCruwa from "../components/dataTables/TableCruwa"






const TBG = () => (
  <Layout>
    <Seo title="TBG" description="Расширительные баки TBG "/>
    <Hero HeaderMark="Продажа и изготовление расширительных баков TBG" ButtonName="Прайс"/>
    <ProductsCruwa heading="TBG"/>
    <TableCruwa />
    <Certificates />
    
    <Stats />
    <Email />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default TBG
