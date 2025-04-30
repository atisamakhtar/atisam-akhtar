import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function About() {
  return (
    <div className="space-y-12 fade-in">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">About Me</h1>
         <Avatar className="h-32 w-32 mx-auto mb-6 shadow-lg">
            {/* <AvatarImage src="atisam akhter profile image.png" alt="Atisam Akhtar" /> */}
            <AvatarImage src="/media/atisam akhter profile image.png  " alt="Atisam Akhtar" />
            <AvatarFallback>AA</AvatarFallback>
          </Avatar>
        <p className="text-lg md:text-xl text-foreground max-w-3xl mx-auto">
          I'm a dedicated and enthusiastic developer with a passion for crafting clean, efficient, and user-friendly applications. My journey in tech started with a curiosity about how things work, and it has grown into a fulfilling career focused on building innovative solutions.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-6 text-center">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Firebase', 'Docker', 'Git'].map((skill) => (
            <Card key={skill} className="text-center transition-transform duration-300 hover:scale-105 hover:shadow-lg bg-card">
              <CardContent className="p-6">
                <p className="font-medium text-card-foreground">{skill}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
         <h2 className="text-3xl font-semibold mb-6 text-center">My Journey</h2>
         <Card className="bg-card">
           <CardHeader>
             <CardTitle className="text-primary">Education & Experience</CardTitle>
           </CardHeader>
           <CardContent className="space-y-4 text-card-foreground">
             <div>
               <h3 className="font-semibold">Degree Name - University Name</h3>
               <p className="text-sm text-muted-foreground">Year of Graduation</p>
               <p>Relevant coursework or achievements.</p>
             </div>
              <div>
               <h3 className="font-semibold">Job Title - Company Name</h3>
               <p className="text-sm text-muted-foreground">Dates of Employment</p>
               <p>Key responsibilities and accomplishments.</p>
             </div>
             {/* Add more education/experience items as needed */}
           </CardContent>
         </Card>
      </section>
    </div>
  );
}
