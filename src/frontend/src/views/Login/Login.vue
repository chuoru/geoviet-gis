<template>
    <div class="main-screen ">
        <div class="login-screen-body">
            <div class="h-100 d-flex justify-content-center align-items-center">
                <div class="login-container">
                    <div class="row m-4">
                        <div>
                            <h5 class="system-name">Web Geography Information System</h5>
                            <h1 class="system-pr">Login to your account</h1>
                        </div>
                    </div>
                    <form ref="login" onsubmit="event.preventDefault()">
                        <b-form-group
                            label="Email or User ID"
                            class="mx-4 system-name"
                            :invalid-feedback="usernameMetaData.invalidFeedback"
                            :state="usernameMetaData.validState"
                        >
                            <b-form-input
                                type="text"
                                v-model="usernameMetaData.username"
                                :state="usernameMetaData.validState"
                                required
                            >
                            </b-form-input>
                        </b-form-group>
                        <b-form-group
                            label="Password"
                            class="mx-4 mt-4 system-name"
                            :invalid-feedback="passwordMetaData.invalidFeedback"
                            :state="passwordMetaData.validState"
                        >
                            <b-form-input
                                type="password"
                                v-model="passwordMetaData.password"
                                :state="passwordMetaData.validState"
                                required
                                >
                            </b-form-input>
                        </b-form-group>
                        <div class="row m-4">
                            <div class="col-4">
                                <button 
                                @click="onSignInButtonClick" class="btn btn-lg btn-success">
                                    Sign in
                                </button>                            
                            </div>
                            <div class="col my-auto system-name">
                                Don't have account? 
                                <a href="https://www.google.de">Sign up here</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>



<script src="./Login.js"></script>
<style src="./Login.css" scoped></style>