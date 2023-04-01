import '../styles/skills.css';
import Progressbar from './Progress';

const Skills = () => {
    return (
        <div className="skills">
            <h1 className="h1">Skill Set</h1>
            <div className="skills-set">
                <div className='skills-sec'>
                    <div className='skill'>
                        <h3>HTML</h3>
                        <Progressbar class="Progressbar" bgcolor="#57BCDA" progress='95' height={30} />
                    </div>
                    <div className='skill'>
                        <h3>css</h3>
                        <Progressbar class="Progressbar" bgcolor="#57BCDA" progress='95' height={30} />
                    </div>
                </div>
                <div className='skills-sec'>
                    <div className='skill'>
                        <h3>JAVASCRIPT</h3>
                        <Progressbar class="Progressbar" bgcolor="#57BCDA" progress='80' height={30} />
                    </div>
                    <div className='skill'>
                        <h3>REACT</h3>
                        <Progressbar class="Progressbar" bgcolor="#57BCDA" progress='70' height={30} />
                    </div>
                </div>
                <div className='skills-sec'>
                    <div className='skill'>
                        <h3>BOOTSTRAP</h3>
                        <Progressbar class="Progressbar" bgcolor="#57BCDA" progress='95' height={30} />
                    </div>
                    <div className='skill'>
                        <h3>Mongodb</h3>
                        <Progressbar class="Progressbar" bgcolor="#57BCDA" progress='60'  height={30} />
                    </div>                    
                </div>           
            </div>
        </div>
    );
}

export default Skills;
