<template>
  <div class="outer-container">
    <div class="container-wrap">
      <h1>Cars</h1>
      <div class="flex gap-20">
        <!-- Custom Make Dropdown -->
        <div class="dropdown">
          <button @click="toggleMakeDropdown" class="styled-select">
            {{ selectedMake || "Select Make" }}
            <span v-if="selectedMake" @click.stop="clearMark()">X</span>
          </button>
          <div v-if="showMakeDropdown" class="dropdown-content">
            <div
              v-for="make in uniqueMakes"
              :key="make"
              @click="selectMake(make)"
              class="dropdown-item"
            >
              {{ make }}
            </div>
          </div>
        </div>

        <!-- Custom Color Dropdown -->
        <div class="dropdown">
          <button @click="toggleColorDropdown" class="styled-select">
            <span>
              <span
                v-if="selectedColor"
                :style="{ backgroundColor: selectedColor }"
                class="color-dot"
              ></span>
              {{ selectedColor || "Select Color" }}
            </span>
            <span v-if="selectedColor" @click.stop="clearColor()">X</span>
          </button>
          <div v-if="showColorDropdown" class="dropdown-content">
            <div
              v-for="color in uniqueColors"
              :key="color"
              @click="selectColor(color)"
              class="dropdown-item"
            >
              <span
                :style="{ backgroundColor: color }"
                class="color-dot"
              ></span>
              {{ color }}
            </div>
          </div>
        </div>
      </div>

      <ul class="car-list">
        <li v-for="car in filteredCars" :key="car.id" class="car-item">
          {{ car.make }} - {{ car.model }}
          <span
            :style="{ backgroundColor: car.color }"
            class="color-dot"
          ></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "CarCard",
  data() {
    return {
      selectedMake: "",
      selectedColor: "",
      showMakeDropdown: false,
      showColorDropdown: false,
    };
  },
  computed: {
    ...mapGetters(["carList"]),
    uniqueMakes() {
      const makes = this.carList.map((car) => car.make);
      return [...new Set(makes)];
    },
    uniqueColors() {
      const colors = this.carList.map((car) => car.color);
      return [...new Set(colors)];
    },
    filteredCars() {
      return this.carList.filter((car) => {
        return (
          (!this.selectedMake || car.make === this.selectedMake) &&
          (!this.selectedColor || car.color === this.selectedColor)
        );
      });
    },
  },
  methods: {
    toggleMakeDropdown() {
      this.showMakeDropdown = !this.showMakeDropdown;
      this.showColorDropdown = false; // Close color dropdown if open
    },
    toggleColorDropdown() {
      this.showColorDropdown = !this.showColorDropdown;
      this.showMakeDropdown = false; // Close make dropdown if open
    },
    selectMake(make) {
      this.selectedMake = make;
      this.showMakeDropdown = false;
    },
    selectColor(color) {
      this.selectedColor = color;
      this.showColorDropdown = false;
    },
    clearMark() {
      this.selectedMake = "";
      this.showMarkDropdown = false;
    },
    clearColor() {
      this.selectedColor = "";
      this.showColorDropdown = false;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.outer-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
}

.container-wrap {
  width: 70%;
  max-width: 500px;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.styled-select {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  cursor: pointer;
  text-align: left;
  position: relative;
  display: flex;
  justify-content: space-between;
}

.car-list {
  list-style-type: none;
  padding: 0;
}

.car-item {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  margin: 5px 0;
  padding: 10px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.flex {
  display: flex;
}

.gap-20 {
  gap: 20px;
}

.color-dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 5px;
}

.dropdown {
  position: relative;
  display: inline-block;
  width: 100%;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: white;
  min-width: 100%;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 4px;
  overflow: hidden;
}

.dropdown-content .dropdown-item {
  padding: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.dropdown-content .dropdown-item:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>
