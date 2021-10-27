
/**
 * 弹窗集合
 */
export class ui {

    /**
     * 弹窗
     */
    public static alert(msg: string) {
        layer.open({
            title: '提示'
            , content: msg
        });
    }

    /**
     * 确认窗口
     */
    public static confirm(msg: string) {
        layer.confirm(msg, (index: number) => {
            layer.close(index);
        });
    }

    /**
     * 组件窗口
     * @param data 
     */
    public window(data: {}) {

    }

    /**
     * 消息提醒
     */
    public toast() {

    }

}