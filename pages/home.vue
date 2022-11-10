<template>
<body>
    <div class="fill-container" style="height: 100vh; background: orange">
      <div class="add-container" style="height: 96vh; width: 28%; transform: translateY(13px); margin-left: 12px; border-radius: 20px; background: white; box-shadow: 5px 5px 5px rgb(0 0 0 / 30%);">
        <p class="header-login" style="transform: translateY(15px); margin-left: 100px; margin-top: 60px">ADD STUDENTS</p>
        <input id="form-name" v-model="item.fname" type="text" placeholder="Firstname" class="form-control" style="margin-left: 35px; transform: translateY(170px); width: 80%">
        <input id="form-name" v-model="item.lname" type="text" placeholder="Lastname" class="form-control" style="margin-left: 35px; transform: translateY(180px); width: 80%"> 
        <input v-model="item.cnum" type="number" placeholder="Contact Number" class="form-control" style="margin-left: 35px; transform: translateY(190px); width: 80%">
        <input v-model="item.age" type="number" placeholder="Age" class="form-control" v-on:keyup.enter="addItem" style="margin-left: 35px; transform: translateY(200px); width: 80%">
        <button style="margin-left: 130px; transform: translateY(250px); width: 30%" @click="addItem" class="btn-add">ADD</button>
      </div>
      <div class="view-table" style="height: 96vh; margin-left: 415px; margin-top: -94vh; width: 63%; border-radius: 20px; background: white; box-shadow: 5px 5px 5px rgb(0 0 0 / 30%); overflow: scroll">
        <table class="table table-striped table-bordered table-sm" style="text-align: center; background-color: white; transform: translateY(20px); width: 95%; margin-left: 20px">
          <thead style="background-color: #F5F5F5;; color: black">
            <th> First Name</th>
            <th> Last Name</th>
            <th> Age</th>
            <th> Contact</th>
            <th style="background: orange; color: white; width: 200px"> Modify</th>
          </thead>
          <tr v-for="(item, index) in items" :key="item">
            <td>
              <input v-if="item.edit" v-model="item.fname"  type="text" v-on:keyup.enter="item.edit = !item.edit">
              <span v-else>{{item.fname}} </span>
            </td>
            <td>
              <input v-if="item.edit" v-model="item.lname" type="text" v-on:keyup.enter="item.edit = !item.edit">
              <span v-else>{{item.lname}} </span>
            </td>
            <td>
              <input v-if="item.edit" v-model="item.age" type="text" v-on:keyup.enter="item.edit = !item.edit">
              <span v-else>{{item.age}} </span>
            </td>
            <td>
              <input v-if="item.edit" v-model="item.cnum" type="text" v-on:keyup.enter="item.edit = !item.edit">
              <span v-else>{{item.cnum}} </span>
            </td>
            <td>
              <button @click="item.edit = !item.edit" class="btn btn-info" style="width: 60px"><i class="far fa-edit">EDIT</i></button>
              <button @click="removeItem(index)" class="btn btn-danger" style="width: 90px"><i class="far fa-trash-alt">REMOVE</i></button>
            </td>
          </tr>
        </table>
      </div>
    </div>
</body>
</template>

<script>
export default {
    name: 'Home',
    data() {
    return {
      item: {fname: "", lname: "", cnum: "", age: "", edit: false},
      items: []
    }
  },
  methods:{
    addItem() {
      this.items.push({
        fname:this.item.fname, lname:this.item.lname, cnum:this.item.cnum, age:this.item.age, edit: false}
        );
      this.item = [];
    },
    removeItem(index){
      this.items.splice(index, 1)
    }
  }
}
</script>

<style>
    .form-inline input {
      margin-right:8px;
    }

    .btn-add {
      width: 150px;
      height: 30px;
      transition: all .1s ease-in-out;
      font-weight: bold;
      color: #FF8300;
      background-color: white;
      text-align: center;
      border: 1;
      border-color: #FF8300;
      margin-left: 30px;
    }

    .btn-add:hover {
      background-color: #FF8300;
      color: white;
    }
</style>