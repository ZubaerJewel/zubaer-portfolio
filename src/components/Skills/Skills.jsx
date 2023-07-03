

const Skills = () => {
  return (
      <div id="skills">
          <h1 data-aos="fade-up" className='text-center font-bold text-6xl mb-10 mt-20'>Skills</h1>


          <div className="flex justify-center">
              <div className="grid grid-cols-4 gap-48">
                  <div data-aos="fade-right" className="">
                      <h3 className="text-2xl font-semibold mb-2">Expertise</h3>
                      <ul>
                          <li>Html</li>
                          <li>CSS</li>
                          <li>TailwindCSS</li>
                          <li>Bootstrap</li>
                          <li>Javascript</li>
                          <li>ES6</li>
                          <li>React</li>
                          <li>Firebase</li>
                      </ul>
                  </div>
                  <div data-aos="fade-right" data-aos-delay="100">
                      <h3 className="text-2xl font-semibold mb-2">Comfortable</h3>
                      <ul>
                          <li>Node.js</li>
                          <li>Express.js</li>
                          <li>Rest APIs</li>
                          <li>MongoDB</li>
                          <li>NPM</li>
                      </ul>
                  </div>
                  <div data-aos="fade-left" data-aos-delay="200">
                      <h3 className="text-2xl font-semibold mb-2">Familier</h3>
                      <ul>
                          <li>JWT</li>
                          <li>React Query</li>
                          <li>Axios</li>
                          <li>Stripe</li>
                          <li>Next Js</li>
                      </ul>
                  </div>
                  <div data-aos="fade-left" data-aos-delay="300">
                      <h3 className="text-2xl font-semibold mb-2">Tools</h3>
                      <ul>
                          <li>Git</li>
                          <li>Github</li>
                          <li>VSCode</li>
                          <li>Vercel</li>
                          <li>Netlify</li>
                          <li>Figma</li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
  );
};

export default Skills;
