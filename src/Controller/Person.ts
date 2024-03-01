import { Request, Response } from "express";
 class Person{

  public  getName(req: Request, res:Response) {
    const technologies = [
      { name: "Mateus", stack: ["TypeScript", "React", "Node.js", "PHP", "Laravel", "C", "Java", "Docker", "Linux"] },
      { name: "Programação", stack: ["HTML", "CSS", "JavaScript", "Python", "SQL", "NoSQL", "GraphQL", "REST", "APIs"] },
      { name: "Frontend", stack: ["React", "Vue.js", "Angular", "SASS", "Bootstrap", "Material-UI", "Responsive Design"] },
      { name: "Backend", stack: ["Node.js", "Express", "Django", "Flask", "Ruby on Rails", "ASP.NET", "Firebase"] },
      { name: "Mobile", stack: ["React Native", "Flutter", "Swift", "Kotlin", "Android Studio", "Xcode"] },
      { name: "DevOps", stack: ["Docker", "Kubernetes", "Jenkins", "Git", "CI/CD", "Monitoring", "AWS", "Azure", "GCP"] },
      { name: "Data Science", stack: ["Python", "R", "NumPy", "Pandas", "Matplotlib", "Scikit-learn", "TensorFlow", "Keras"] },
      { name: "Machine Learning", stack: ["TensorFlow", "Scikit-learn", "Keras", "PyTorch", "Deep Learning", "Neural Networks"] },
      { name: "Blockchain", stack: ["Ethereum", "Solidity", "Web3.js", "Smart Contracts", "Decentralized Applications"] },
    ];
    
    res.send(technologies)
 }
 public getCpf (req:Request, res: Response){
  
 }
}
export default  new Person;