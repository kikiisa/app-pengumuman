<template>
    <div class="list-pengumuman">
        <v-container>
            <v-alert border="top" color="indigo" dark>
                Selamat Datang di Aplikasi pengumuman <strong>SMKN N 2 PAGUYAMAN</strong>
            </v-alert>
            <v-alert class="mt-4" type="error" v-if="stats == false">
                Belum Ada Pengumuman
            </v-alert>
            <v-row class="justify-content-center" v-else>
                <v-col md="4" v-for="getData in pengumuman" :key="getData.id_pengumuman">
                    <v-card class="mx-auto mt-4" max-width="344">
                        <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>
                        <v-card-title>
                        <strong>{{ getData.judul_pengumuman }}</strong>
                        </v-card-title>
                        <v-card-subtitle>
                            oleh : {{ getData.nama_lengkap }}
                        </v-card-subtitle>
                        <v-card-actions>
                        <v-btn @click="this.$router.push(`/detail-pengumuman/${getData.id_pengumuman}`)" color="orange lighten-2" text>
                            Detail
                        </v-btn>
                        <v-spacer></v-spacer>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>   
    </div>
</template>
<script>
import axios from '../url/url'
export default {
    name:"listPengumuman",
    data()
    {
        return{
            title:"Kerja Bakti Nasional",
            stats:null,
            pengumuman:null,
        }
    },
    created()
    {
        this.all();
    },
    methods:{
        async all()
        {
            await axios.get("Pengumuman").then((response)=>{
                const { status,data } = response.data
                if(status == false)
                {
                    this.stats = false
                }else{
                    this.pengumuman = data
                    this.stats = true
                }
            }).catch((error)=>{
                console.log(error)
            })
        }
    }
}
</script>