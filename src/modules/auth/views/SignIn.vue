<template>
    <div class="root">
        <transition name="el-fade-in-linear">
            <div class="sign-in-window">
                <header class="login-window-title">
                    <h3>Login to system</h3>
                </header>
                <el-form :model="signInData" status-icon ref="signInForm">
                    <el-form-item label="Login" prop="login"
                      :rules="[
                        { required: true, message: 'Enter login', trigger: 'submit' },
                      ]">
                        <el-input v-model="signInData.login"></el-input>
                    </el-form-item>
                    <el-form-item
                        label="Password"
                        prop="password"
                        :rules="[
                            { required: true, message: 'Enter password', trigger: 'submit' },
                    ]">
                        <el-input type="password" v-model="signInData.password" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-checkbox v-model="remember">Remember me</el-checkbox>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="signIn('signInForm')">Submit</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </transition>
    </div>
</template>

<script>

    import {API_URL} from "../../../constants/api"
    import { prop } from 'ramda'
    import {setToken} from "../../../helpers/token";

    export default {
        name: "sign-in",
        data: () => ({
            remember: false,
            signInData: {
                login: null,
                password: null
            },
        }),
        methods: {
            signIn(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$http.post(`${API_URL}/auth/login/`, this.signInData).then(response => {
                            return response.json()
                        }, response => console.log(response)).then(response => {
                            let token = prop('token', response)
                            if (prop('token', response)) {
                                this.$store.commit('SET_TOKEN', token)
                                setToken(token, this.remember)
                                return this.$router.push({name: 'announcement'})
                            }
                            this.$message({
                                message: 'Login or password incorrect.',
                                type: 'error'
                            });
                        })
                    } else {
                        return false
                    }
                });
            },
        }
    }
</script>

<style lang="less" scoped>
    @import '../../../less/global';

    .root {
        display: flex;
        justify-items: center;
        justify-content: center;
        align-items: center;
        background: @base-color;
        height: 100%;
        width: 100%;
        .sign-in-window {
            border-radius: 10px;
            box-shadow: 0 0 24px -1px rgba(0, 0, 0, 0.56);
            padding: 25px 30px;
            box-sizing: border-box;
            max-width: 600px;
            width: 100%;
            border: 1px solid #ddd;
            background: #fff;
            .login-window-title {
                font-size: 24px;
                text-align: center;
                padding: 15px 0;
            }
        }
    }
</style>
