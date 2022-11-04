<template>
<body>
<div id="app" style="background-color: green; height: 100vh">
  <div class="container" style="background-color: white; height: 100vh; margin-left: 5%; z-index: 1; overflow: scroll">
    <br>
    <div class="form-inline" action="#" style="margin-top: 5%">
    <input id="form-name" v-model="item.fname" type="text" placeholder="Firstname" class="form-control">
    <input id="form-name" v-model="item.lname" type="text" placeholder="Lastname" class="form-control"> 
    <input v-model="item.cnum" type="number" placeholder="Contact Number" class="form-control" v-on:keyup.enter="addItem">
    <button @click="addItem" class="btn-add">ADD STUDENT</button>
    </div>
    <br><br>
    <table class="table table-striped table-bordered table-sm" style="text-align: center; background-color: orange">
      <thead style="background-color: #F5F5F5;; color: black">
        <th>First Name</th>
        <th>Last Name</th>
        <th>Contact No.</th>
        <th class="col-2">Modify User</th>
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
          <input v-if="item.edit" v-model="item.cnum" type="text" v-on:keyup.enter="item.edit = !item.edit">
          <span v-else>{{item.cnum}} </span>
        </td>
        <td><button @click="item.edit = !item.edit" class="btn btn-info"><i class="far fa-edit">EDIT</i></button>
          <button @click="removeItem(index)" class="btn btn-danger"><i class="far fa-trash-alt">REMOVE</i></button></td>
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
      item: {fname: "", lname: "", cnum: "", edit: false},
      items: []
    }
  },
  methods:{
    addItem() {
      this.items.push({
        fname:this.item.fname, lname:this.item.lname, cnum:this.item.cnum, edit: false}
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