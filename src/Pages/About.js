import React from 'react'
import ComponentBody from '../Components/ComponentBody'

export default function About() {
    React.useEffect(() => {
        document.title = 'RecipeBook | AboutUs';
    }, []);
    return (
        <div className="categories">
            <div className="body-section">
                <section className="body-section-content">
                    <h1 style={{ marginLeft: '25px', paddingTop: '25px' }}>About Us</h1>
                    <p style={{ marginLeft: '25px', paddingTop: '25px', paddingBottom: '25px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum qui a exercitationem consectetur tempore, fuga sed, dolorum necessitatibus molestias modi praesentium ipsa quo cum laboriosam harum, eaque ea dolores.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quia accusamus voluptatibus iusto! Sapiente dolore perspiciatis accusantium, nostrum odit, nisi pariatur sit doloribus fugiat eius temporibus est praesentium consectetur facere! </p>
                    <p style={{ marginLeft: '25px', paddingTop: '25px', paddingBottom: '25px' }}> API .... The Meal DB</p>
                </section>
            </div>
        </div>
    )
}
