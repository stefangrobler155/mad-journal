import MadHeader from '../components/MadHeader'
import MadCards from '../components/MadCards'
import MadCardsProps from '../components/MadCardsProps'
import MadCardsPropsDes from '../components/MadCardsProps'
import Joke from '../components/Joke'
import JokePoke from '../components/JokePoke'
import { jokeData, jokePokeData } from '../data/data';

const Home = (props) => {
  return (
    <section className='mad__home-section'>
        <MadHeader />
        <MadCards />
        <MadCardsProps 
            id="10"
            heading="Props Entry"
            subheading="Passing Props to MadCardsProps Component Parent to Child"
            image="./images/entry4.jpg" 
            title="Props Entry"
            location="Props location"
            link="Props Gallery Link"
            content="Props Lorem ipsum dolor sit amet, consectetur  dipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            date="Props 2023-10-01 - 2023-10-11" 
        />
        <MadCardsPropsDes 
            id="11"
            heading="Destructuring Props"
            subheading="Destructuring props is a modern JavaScript technique that makes your React components cleaner and more readable. Instead of accessing props through the props object (like props.name), you destructure them right in the function parameters."
            image="./images/entry5.jpg" 
            title="Props Destructuring"
            location="Props location Destructuring"
            link="Props Gallery Link Destructuring"
            content="Props Destructuring Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            date="2023-10-01 - 2023-10-11"
        />
        <Joke 
            id={jokeData[0].id}
            heading={jokeData[0].heading}
            subheading={jokeData[0].subheading}
            image={jokeData[0].image}
            title={jokeData[0].title}
            content={jokeData[0].content}
        />
        <Joke 
            id={jokeData[1].id}
            heading={jokeData[1].heading}
            subheading={jokeData[1].subheading}
            image={jokeData[1].image}
            title={jokeData[1].title}
            content={jokeData[1].content}
        />
        <Joke 
            id={jokeData[2].id}
            heading={jokeData[2].heading}
            subheading={jokeData[2].subheading}
            image={jokeData[2].image}
            title={jokeData[2].title}
            content={jokeData[2].content}
        />
        <JokePoke
            key={jokePokeData.id}
            jokePokeData={ jokePokeData } 
        />
    </section>
  )
}

export default Home