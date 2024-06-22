
export interface Dog{
    name:string;
    age:number;
}

export interface DogListProps{
    dogs:Dog[];
    LastUpdate:string;
}

export interface SendDataButtonProps {
  dogs: Dog[];
}
export interface addDogsProps{
    addDog:(name:string,age:number) => void
}