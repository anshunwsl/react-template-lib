// import shop from '../../api/shop'

// initial state
// 初始化地图框架全局变量.
const state = {
    view: null,
    loader: null,
    //图层缓存.
    _layersCache_: {},
    layer:null
};

// getters
const getters = {
    //
    getLayer: (state) => (id) => {
        return state._layersCache_[id];
    }
};
// actions ,, 接收异步提交的数据.
const actions = {};

// mutations
const mutations = {
    //
    view(state, view) {
        //
        state.view = view;
    },
    loader(state, loader) {
        //
        state.loader = loader;
    },
    //缓存各个组件中的图层.
    layer(state, layerProps) {
        //
        state.layer=layerProps.layer;
        if (!state._layersCache_.hasOwnProperty(layerProps.id)) {
            state._layersCache_[layerProps.id] = layerProps.layer;
        }
    }
};

export default {

    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
