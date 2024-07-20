<template>
  <div class="outer-container">
    <div class="container-wrap">
      <h1>Cars</h1>
      <div class="flex gap-20">
        <select v-model="selectedMake" class="styled-select">
          <option value="">Select Make</option>
          <option v-for="make in uniqueMakes" :key="make" :value="make">
            {{ make }}
          </option>
        </select>
        <select v-model="selectedColor" class="styled-select">
          <option value="">Select Color</option>
          <option v-for="color in uniqueColors" :key="color" :value="color">
            {{ color }}
          </option>
        </select>
      </div>

      <ul class="car-list">
        <li v-for="car in filteredCars" :key="car.id" class="car-item">
          {{ car.make }} - {{ car.model }} - {{ car.color }}
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-image: url('data:image/svg+xml;utf8,<svg fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="6 9 12 15 18 9"/></svg>');
  background-repeat: no-repeat;
  background-position-x: 95%;
  background-position-y: 50%;
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
</style>
