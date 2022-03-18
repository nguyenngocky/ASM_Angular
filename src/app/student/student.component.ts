import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'Trang chủ';
  abc = 'sadsaca';

  student = {
    name: 'Kỳ nn',
    age: 25,
    phone: '0335075778',
    email: 'nguyenngocky1995@gmail.com',
    img: 'https://img.freepik.com/free-photo/portrait-handsome-young-man-with-crossed-arms_176420-15569.jpg?size=626&ext=jpg&ga=GA1.1.1483558402.1641772800'
  };

  students = [
    {
      id: 1,
      name: 'Kỳ nn',
      age: 25,
      phone: '0335075778',
      email: 'nguyenngocky1995@gmail.com',
      img: 'https://img.freepik.com/free-photo/portrait-handsome-young-man-with-crossed-arms_176420-15569.jpg?size=626&ext=jpg&ga=GA1.1.1483558402.1641772800'
    },

    {
    id: 2,
    name: 'Kỳ nn',
    age: 25,
    phone: '0335075778',
    email: 'nguyenngocky1995@gmail.com',
    img: 'https://img.freepik.com/free-photo/portrait-handsome-young-man-with-crossed-arms_176420-15569.jpg?size=626&ext=jpg&ga=GA1.1.1483558402.1641772800'
    },

    {
      id: 3,
      name: 'Kỳ nn',
      age: 25,
      phone: '0335075778',
      email: 'nguyenngocky1995@gmail.com',
      img: 'https://img.freepik.com/free-photo/portrait-handsome-young-man-with-crossed-arms_176420-15569.jpg?size=626&ext=jpg&ga=GA1.1.1483558402.1641772800'
      },

      {
        id: 4,
        name: 'Kỳ nn',
        age: 23,
        phone: '0335075778',
        email: 'nguyenngocky1995@gmail.com',
        img: 'https://img.freepik.com/free-photo/portrait-handsome-young-man-with-crossed-arms_176420-15569.jpg?size=626&ext=jpg&ga=GA1.1.1483558402.1641772800'
      },
  ];

  users = [
    {
      id: 1,
      ten: 'Kỳnn1102',
      chieucao: 23,
      cannang: 55,
      img: 'https://img.freepik.com/free-photo/portrait-handsome-young-man-with-crossed-arms_176420-15569.jpg?size=626&ext=jpg&ga=GA1.1.1483558402.1641772800'
    },

    {
      id: 2,
      ten: 'Aln123',
      chieucao: 83,
      cannang: 20,
      img: 'https://img.freepik.com/free-photo/portrait-handsome-young-man-with-crossed-arms_176420-15569.jpg?size=626&ext=jpg&ga=GA1.1.1483558402.1641772800'
    },

    {
      id: 3,
      ten: 'Bmn116',
      chieucao: 63,
      cannang: 32,
      img: 'https://img.freepik.com/free-photo/portrait-handsome-young-man-with-crossed-arms_176420-15569.jpg?size=626&ext=jpg&ga=GA1.1.1483558402.1641772800'
    },

  ];


  // tìm kiếm
  searchValue = "";
  // lấy tất cả phần tử user vào 1 mảng mới và gán cho ListUser
  ListUsers = this.users
  
  remove(id :number) {
    const confirm = window.confirm("Bạn có muốn xóa không")
    this.ListUsers = this.ListUsers.filter(u => u.id !== id);
    // const USERS = this.ListUsers.filter(u => u.id == id)
    // // console.log(USERS);
    
    // if(confirm == true && USERS[0].cannang > 30){
    //   this.ListUsers = this.ListUsers.filter(u => u.id !== id);
    // }else{
    //   alert("Ơ kìa cân nặng < 30 không cho xóa")
    // } 
  
}

  onSearch(event :any) {
    this.searchValue = event.target.value;
    
    this.ListUsers= this.users.filter(u =>{
      const userNameLowerCase = u.ten.toLowerCase();
      const searchNameLowerCase = this.searchValue.toLowerCase() .trim();
      
      return  userNameLowerCase.indexOf(searchNameLowerCase) !== -1;
    });
  }

  // add new user
   newUser = {
     id: 0,
     ten: '',
     chieucao: 0,
     cannang: 0,
     img: 'https://img.freepik.com/free-photo/portrait-handsome-young-man-with-crossed-arms_176420-15569.jpg?size=626&ext=jpg&ga=GA1.1.1483558402.1641772800'
  }
  onChangeInput(event :any, key :string) {
    const inputValue = event.target.value;

    this.newUser = {
      ...this.newUser,
      [key]: inputValue
    }
  }

  onsubmit(){

    if(!this.onValidate(this.newUser)){
      return;
    }

    if (this.newUser.id) {
      // Neu co id thi se la cong viec chinh sua
      // Tim xem dau la phan tu co id la id dang duoc chinh sua
      for (let i = 0; i < this.users.length; i++) {
        // Kiem tra phan tu nao co id trung voi id cua du lieu chinh sua
        if (this.users[i].id === this.newUser.id) {
          // Khi tim thay thi gan gia tri cho phan tu do
          this.users[i] = this.newUser;
        }
      }
    }else {
      this.newUser = {
        ...this.newUser,
        id: this.users.length + 1,
        chieucao: Number(this.newUser.chieucao),
        cannang: Number(this.newUser.cannang),
      }

      this.users.push(this.newUser);

    };
    
  }

  onValidate(obj :any) {
    if (!obj.ten || !obj.chieucao || !obj.cannang){
      return false;
    }
    return true;
  }

  onEdit(u: any) {
    this.newUser = u;
  }

}
