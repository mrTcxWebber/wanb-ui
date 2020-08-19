<template>
    <div>
        <h3>button示例</h3>
        <h2>示例一: theme</h2>
        <div>
            <Button @click="onClick" @mouseover="onMouseover">你好</Button>
            <Button theme="button">按钮2</Button>
            <Button theme="link">按钮3</Button>
            <Button theme="text">按钮4</Button>
        </div>
        <h1>示例2</h1>
        <div>
            <Button size="big">大大大</Button>
            <Button>普普通</Button>
            <Button size="small">小小小</Button>
        </div>
        <h2>示例三: level</h2>
        <div>
            <Button theme="button" level="small">按钮2</Button>
            <Button theme="button" level="main">按钮3</Button>
            <Button theme="text" level="minor">按钮4</Button>
            <Button theme="text" level="danger">按钮4</Button>
        </div>
        <h1>示例3</h1>
        <div>
            <dir>
                <Button level="main">主要按钮</Button>
                <Button>普通按钮</Button>
                <Button level="danger">危险按钮</Button>
            </dir>
            <dir>
                <Button theme="link" level="main">主要链接按钮</Button>
                <Button theme="link">普通链接按钮</Button>
                <Button theme="link" level="danger">危险链接按钮</Button>
            </dir>
            <dir>
                <Button theme="text" level="main">主要文字按钮</Button>
                <Button theme="text">普通文字按钮</Button>
                <Button theme="text" level="danger">危险文字按钮</Button>
            </dir>
        </div>
        <h1>示例4</h1>
        <div>
            <Button disabled>禁用按钮</Button>
            <Button theme="link" disabled>禁用链接按钮</Button>
            <Button theme="text" disabled>禁用文本按钮</Button>
        </div>
        <h1>示例5</h1>
        <div>
            <Button loading>加载中</Button>
            <Button>加载完毕</Button>
        </div>
    </div>
</template>

<script lang="ts">
    import { ref, watch } from "vue";
    import Button from "../lib/Button.vue";
    export default {
        components: {
            Button
        },
        setup() {
            const onClick = () => {
                console.log('点击btn');
            }
            const onMouseover = () => {
                console.log('好困啊')
            }
            return { onClick, onMouseover }
        }
    };
</script>