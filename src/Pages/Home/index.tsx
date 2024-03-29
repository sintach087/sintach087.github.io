import React from 'react';
import { Main, About, Skills, Tools, Projects, Contact, Footer } from './Components';
import 'common/effects.scss';

const Home = () => {

    return (
        <React.Suspense fallback='Loading . . .'>
            <Main />
            <About />
            <Skills />
            <Tools />
            <Projects />
            <Contact />
            <Footer />
        </React.Suspense>
    )
}

export default Home;