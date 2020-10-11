/**
 * Fiber中，很多地方都用到链表
 *
 * @summary short description for the file
 * @author jinghui-Luo
 *
 * Created at     : 2020-10-08 17:31:24
 * Last modified  : 2020-10-08 20:52:04
 */

class Update {
  // payload 数据或者元素
  constructor(payload, nextUpload) {
    this.payload = payload;
    this.nextUpload = nextUpload;
  }
}

class UpdateQueue {
  constructor() {
    this.baseState = null; // 原状态
    this.firstUpdate = null; // 第一个更新
    this.lastUpdate = null; // 最后一个更新
  }

  enqueueUpdate(update) {
    if (this.firstUpdate == null) {
      this.firstUpdate = this.lastUpdate = update;
    } else {
      this.lastUpdate.nextUpload = update;
      this.lastUpdate = update;
    }
  }
  // 获取老状态，然后遍历整个链表，进行更新
  forceUpdate() {
    let currentState = this.baseState || {};
    let currentUpdate = this.firstUpdate;

    while (currentUpdate) {
      let nextState =
        typeof currentUpdate.payload == "function"
          ? currentUpdate.payload(currentState)
          : currentUpdate.payload;

      currentState = { ...currentState, ...nextState };
      currentUpdate = currentUpdate.nextUpload;
    }

    this.firstUpdate = this.lastUpdate = null;
    this.baseState = currentState;

    return currentState;
  }
}

// 计数{number: 0}
// setState({number: 1})
// setState((state) => ({number: state.number + 1}))
let queue = new UpdateQueue();

queue.enqueueUpdate(new Update({ name: "hello" }));
queue.enqueueUpdate(new Update({ number: 0 }));
queue.enqueueUpdate(new Update((state) => ({ number: state.number + 1 })));
queue.enqueueUpdate(new Update((state) => ({ number: state.number + 1 })));
queue.forceUpdate();

console.log(queue.baseState);
console.log(queue.firstUpdate);
console.log(queue.lastUpdate);

let root = {
  key: "a1",
  children: [
    {
      key: "b1",
      children: [
        {
          key: "c1",
          children: [],
        },
        {
          key: "c2",
          children: [],
        },
      ],
    },
    {
      key: "b2",
      children: [],
    },
  ],
};

function wolk(vDom) {
  doWork(vDom);

  vDom.children.forEach((ele) => {
    wolk(ele);
  });
}

function doWork(ele) {
  console.log("ele:", ele.key);
}

wolk(root);
