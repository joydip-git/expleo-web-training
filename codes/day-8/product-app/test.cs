class Car{
    private string modelName;
    private int engineNo;

    public Car(){}
    public Car(string name, int engine){
        this.modelName = name;
        this.engineNo = engine;
    }

    public virtual string Show(){
        return this.modelName+', '+this.engineNo;
    }
    public void Stop(){}
    public void Start(){}
}
class MarutiCar:Car{
    private string maker;
    public MautiCar(){}
    public MautiCar(string name, int engine, string maker){
        this.modelName = name;
        this.engineNo = engine;
        this.maker = maker;
    }
    public override string Show(){
        string partialInfo = base.Show();
        return partialInfo + this.maker;
    }
}
class Program{
    static void Main(){
        MarutiCar carObj = new MarutiCar('Wagon R',1234566, 'Maruti Suzuki');
        carObj.show();
    }
}
