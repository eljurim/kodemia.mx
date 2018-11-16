// Packages
import Layout from '../components/layout'

// Ours
import HeaderHome from '../components/pages/home/Header'
import About from '../components/pages/home/About'
import Courses from '../components/pages/home/Courses'
import Gallery from '../components/pages/home/Gallery'
import Events from '../components/pages/home/Events'
import Contact from '../components/pages/home/Contact'
import Allies from '../components/pages/shared/allies'

const IndexPage = () => (
  <Layout title="Kodemia :: La primera academia real para programadores">
    <HeaderHome background="#000" />
    <script
      dangerouslySetInnerHTML={{
        __html: `gtag('event', 'page_view', { 'send_to': 'AW-781067354', 'user_id': 'replace with value' });`
      }}
    />
    <About />
    <Courses />
    <Gallery />
    <Events />
    <Allies />
    <Contact />
  </Layout>
)

export default IndexPage
