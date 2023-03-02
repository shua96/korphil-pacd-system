<template >
  <v-card style="border-radius: 15px; background-color: white;" class="px-16 pt-5 mx-10 mb-5 elevation-1">
    <v-row no-gutters>
      <v-col>
        <v-toolbar-title class="text-black; text-bold " style="font-weight: bold;">What are you looking
          for?</v-toolbar-title>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col>
        <v-text-field v-model="search" solo prepend-inner-icon="mdi-magnify" style=" flex: 1;"
          label="Search for category, name, keyword, etc." single-line></v-text-field>
      </v-col>
    </v-row>
  </v-card>

  <v-data-table :search="search" v-model="selected" show-select :headers="headers" :items="data"
    class="v-table elevation-1 pt-5 px-5 ml-10 mb-5" style="border-radius: 15px; background-color:">
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Client Information</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ props }">
            <v-btn class="mb-2 elevation-1" style="background-color: #3C59A6; color: white;" v-bind="props">
              New Item
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.name" label="Name"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.age" label="Age"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.gender" label="Gender"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.contact" label="Contact Number"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.email" label="Email Address"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.address" label="Address"></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue-darken-1" variant="text" @click="close">
                Cancel
              </v-btn>
              <v-btn color="blue-darken-1" variant="text" @click="save">
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue-darken-1" variant="text" @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue-darken-1" variant="text" @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon size="small" class="me-2" @click="editItem(item.raw)">
        mdi-pencil
      </v-icon>
      <v-icon size="small" @click="deleteItem(item.raw)">
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <div>No Data Available</div>
    </template>
  </v-data-table>
  <v-main class="v-main"></v-main>
</template>

<script>
export default {
  data: () => ({
    search: '',
    selected: [],
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        title: 'Name',
        align: 'start',
        key: 'name',
      },
      { title: 'Age', key: 'age' },
      { title: 'Gender', key: 'gender' },
      { title: 'Contact No.', key: 'contact' },
      { title: 'Email Adr.', key: 'email' },
      { title: 'Address', key: 'address' },
      { title: 'Actions', key: 'actions' },
    ],
    data: [],
    editedIndex: -1,
    editedItem: {
      name: '',
      age: '',
      gender: '',
      contact: '',
      email: '',
      address: '',
    },
    defaultItem: {
      name: '',
      age: '',
      gender: '',
      contact: '',
      email: '',
      address: '',
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    },
  },

  watch: {
    dialog(val) {
      val || this.close()
    },
    dialogDelete(val) {
      val || this.closeDelete()
    },
  },

  created() {
    this.initialize()
  },

  methods: {
    initialize() {
      this.data = [
        { name: 'John Doe' },
        { name: 'Curtis Carpenter' },
        { name: 'Presley Rodgers' },
        { name: 'Diego Estrada' },
        { name: 'Aedan Rivera' },
      ]
    },

    editItem(item) {
      this.editedIndex = this.data.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem(item) {
      this.editedIndex = this.data.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm() {
      this.data.splice(this.editedIndex, 1)
      this.closeDelete()
    },

    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete() {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.data[this.editedIndex], this.editedItem)
      } else {
        this.data.push(this.editedItem)
      }
      this.close()
    },
  },
}
</script>

<style>
.v-main {
  background-color: #F7F7FB;
}

.v-table {
  max-width: 95%;
}

.v-toolbar__content {
  background-color: white;
}

.v-btn.v-theme--light.text-red.v-btn--density-default.v-btn--size-default.v-btn--variant-text mb-2 {
  background-color: #3C59A6;
}

.v-data-table__td.v-data-table-column--align-start.v-data-table__th.v-data-table__th {
  background-color: #F7F7FB;
}
</style>