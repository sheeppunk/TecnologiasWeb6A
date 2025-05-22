(()=>{

    class manager{
        constructor(
            public Name:string,
            public Id:number,
            public PhoneNo:number,
            public Location:string
        ){
            this.Name = Name;
            this.Id = Id;
            this.PhoneNo = PhoneNo;
            this.Location = Location;
        }

        public _PurchaseInventory=()=>{}
        public _RecordComplaints=()=>{}
        public _ManageStaff=()=>{}
    }

    class Chef{
        constructor(
            public Name:string,
            public Id:number,
            public Location:string
        ){
            this.Name = Name;
            this.Id =Id;
            this.Location = Location;
        }
        public _TakeOrders =()=>{}
    }

    class Inventory{
        constructor(
            public Type:string,
            public Status:string
        ){
            this.Type = Type;
            this.Status = Status;
        }
    }

    class Guest{
        constructor(
            public Name:string,
            public Id:string,
            public PhoneNo:string,
            public Addres:string,
            public RoomNo:string,
        ){
            this.Name = Name;
            this.Id = Id;
            this.PhoneNo;
            this.Addres = Addres;
            this.RoomNo = RoomNo;
        }
        public _CheckIn=()=>{}
        public _CheckOut=()=>{}
        public _PayBill=()=>{}
    }

    class FoodItems{
        constructor(
            public Id:number,
            public Name:string
        ){
            this.Id = Id;
            this.Name = Name;
        }
    }

    class Housekeeping{
        constructor(
            public Name:string,
            public Id:Number,
            public Location:string
        ){
            this.Name = Name;
            this.Id = Id;
            this.Location = Location;
        }
        public _CleanRoom=()=>{}
    }

    class Recepcionist{
        constructor(
            public Name:string,
            public Id:number,
            public PhoneNo:number,
            public Location:string
        ){
            this.Name = Name;
            this.Id = Id;
            this.PhoneNo = PhoneNo;
            this.Location = Location;
        }
        public _CheckRoomAvailability=()=>{}
        public _BookRoom=()=>{}
        public _GenerateBill=()=>{}
        public _AcceptCustomerFeedack=()=>{}
    }

    class Rooms{
        constructor(
            public RoomNo:Number,
            public Location:String
        ){
            this.RoomNo = RoomNo;
            this.Location = Location;
        }
    }

    class Bill{
        constructor(
            public BillNo:number,
            public GuesTName:String
        ){
            this.BillNo = BillNo;
            this.GuesTName = GuesTName;
        }
    }

})()
