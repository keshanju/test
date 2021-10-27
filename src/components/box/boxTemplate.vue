<template>
    <div class="layui-form-item layui-form-text">
        <label class="layui-form-label" v-text="label"></label>
        <div class="layui-input-block">
            <textarea v-model="currentValue" class="layui-textarea" ></textarea>
        </div>
    </div>
</template>
<script lang="ts">
import { Vue, Component, Watch, Prop } from "vue-property-decorator";

@Component
export default class ss extends Vue {
  @Prop()
  private value!: string;
  @Prop()
  private label!: string;
}
</script>

