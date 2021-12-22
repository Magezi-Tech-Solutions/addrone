import Member from "./utils/Member";

function Team() {
  return (
    <section className="bg-white">
      <div className="pt-16 pb-16 pl-4 pr-4 mx-auto ml-auto mr-auto bg-top bg-cover max-w-7xl md:px-24 lg:px-12 lg:py-20">
        <div className="mb-10 ml-auto mr-auto bg-top bg-cover max-w-7xl md:mx-auto sm:text-center lg:max-w-2xl md:mb-16">
          <p className="inline-block px-3 py-px mb-3 text-sm font-semibold tracking-wider text-white uppercase bg-indigo-600 rounded-full">
            Our Crew
          </p>
          <div className="mb-6 ml-auto mr-auto font-sans tracking-tight text-gray-900 bg-top bg-cover max-w-7xl md:mx-auto">
            <p className="inline max-w-lg text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-5xl md:mx-auto">
              Meet The Team
            </p>
          </div>
          <p className="text-base text-gray-700 md:text-lg">
            We love the work we do and we love the amazing people we work with.
            Check out our awesome team of individuals below.
          </p>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <Member
            name="John Smith"
            title="Founder &amp; CEO"
            image="https://cdn.devdojo.com/images/july2021/team-member-1.jpg"
          />
          <Member
            name="Sean Jackson"
            title="Co-Founder"
            image="https://cdn.devdojo.com/images/july2021/team-member-2.jpg"
          />
          <Member
            name="Fred Jenson"
            title="Product Lead"
            image="https://cdn.devdojo.com/images/july2021/team-member-3.jpg"
          />
          <Member
            name="Jeremy Lee"
            title="Lead Engineer"
            image="https://cdn.devdojo.com/images/july2021/team-member-4.jpg"
          />
        </div>
      </div>
    </section>
  );
}

export default Team;
