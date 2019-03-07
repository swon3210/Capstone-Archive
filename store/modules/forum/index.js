const state = {

}

const getters = {


  
}

const mutations = {

}

const actions = {
  get_forum_data () {
    db.collection('forums').onSnapshot(res => {
      const changes = res.docChanges();
      changes.forEach(change => {
        if (change.type === 'added') {
          this.forumPosts.push({...change.doc.data(), id: change.doc.id});
        }
      })
    }, err => console.log(err.message));
  }
}

export default { state, getters, mutations, actions }