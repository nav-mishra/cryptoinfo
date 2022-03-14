import {IProject} from '../src/types/IProject'
import ProjectsPage from './projects'


export const getStaticProps = async () => {
  //const data = await getProjects()
  const dat: IProject[] = [{
    Category: 'Wallet',
    Link: 'https://www.jenkinsthevalet.com/',
    Name: 'Jenkins the Valet',
    SubCategory: 'NFT'
  }]
  return {
    props: {
      projects: dat,
    },
  }
}

export default ProjectsPage
