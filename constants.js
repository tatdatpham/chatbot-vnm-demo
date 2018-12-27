module.exports = {
    PORT: 3002,
    IP: "127.0.0.1",
    staticString: {
        PAGE_ACCESS_TOKEN: "EAAd2dHHt3a8BACwZAfIyf4T2qUsERNDVF7rE09klG4j6t2QjZA18zQaxHn6q65KmClBeJdfabaibVriKgA7dWTcsWh0WZC6YJ4diZBbiXWE1R38RbvYdFiL5IrSFeHSR94GLmYeyNmMNu7rJmZClbRU3mEH2RSkehStnhB3RCAExxQJ5NtEPM",
        PAGE_API_LINK: "https://graph.facebook.com/v2.6/me/messages",
        TEXT_WELCOME: "Xin chào quý khách, đây là chatbot của VNM, chúng tôi có thể hỗ trợ gì cho quý khách? Quý khách có thể chọn vấn đề mà quý khách đang quan tâm dưới đây.",
        TEXT_SUGGESTION: "Đây là những câu hỏi có thể liên quan tới từ khóa bạn cần tìm.",
        TEXT_INPUT_ERROR: "Xin lỗi, chúng tôi chưa hiểu được yêu cầu của quý khách, vui lòng làm rõ yêu cầu của quý khách bằng cách chọn các câu hỏi dưới đây",
        TEXT_NOTIFY_REMIND_FIRST_TIME: "Quý khách có cần chúng tôi hỗ trợ gì thêm không?",
        TEXT_NOTIFY_REMIND_SECOND_TIME: "Chúng tôi vẫn chưa nhận được phản hồi của quý khách, quý khách có cần hỗ trợ thêm không?",
        TEXT_NOTIFY_END_TIME: "Cảm ơn quý khách đã liên hệ với VNM, chúng tôi xin phép được dừng cuộc hội thoại ở dây do không nhận được phản hồi phù hợp từ phía quý khách, nếu quý khách cần hỗ trợ thêm thông tin vui lòng liên hệ lại với chúng tôi qua kênh chat hoặc hotline 789",
    },
    questions: [
        {
          title:"BOM SIM có những ưu đãi gì?",
          image_url:"http://www.vegecity.com/images/VegeCity_FQA.jpg",
          buttons:[
            {
              type:"postback",
              payload:'{"question_id":1}',
              title:"Chi tiết"
            }
          ]
        },
        {
          title:"Làm thế nào để kích hoạt SIM?",
          image_url:"http://www.vegecity.com/images/VegeCity_FQA.jpg",
          buttons:[
            {
              type:"postback",
              payload:'{"question_id":2}',
              title:"Chi tiết"
            }
          ]
        },
        {
          title:"Tại sao sim tôi bị khóa 1 chiều nhưng nạp 20k chỉ dùng được mấy ngày đã hết data rồi?",
          image_url:"http://www.vegecity.com/images/VegeCity_FQA.jpg",
          buttons:[
            {
              type:"postback",
              payload:'{"question_id":3}',
              title:"Chi tiết"
            }
          ]
        },
        {
          title:"Tôi cùng sử dụng BOM SIM tại sao tôi thấy số thuê bao khác được miễn phí 50p gọi ngoại mạng mà số thuê bao của tôi không được?",
          image_url:"http://www.vegecity.com/images/VegeCity_FQA.jpg",
          buttons:[
            {
              type:"postback",
              payload:'{"question_id":4}',
              title:"Chi tiết"
            }
          ]
        },
        {
          title:"Tôi quên nạp 40.000đ để gia hạn ưu đãi của gói cước, tôi nên làm gì để kích hoạt lại ưu đãi này?",
          image_url:"http://www.vegecity.com/images/VegeCity_FQA.jpg",
          buttons:[
            {
              type:"postback",
              payload:'{"question_id":5}',
              title:"Chi tiết"
            }
          ]
        },
        {
          title:"Tôi có thể mua SIÊU THÁNH SIM mới ở đâu? ",
          image_url:"http://www.vegecity.com/images/VegeCity_FQA.jpg",
          buttons:[
            {
              type:"postback",
              payload:'{"question_id":6}',
              title:"Chi tiết"
            }
          ]
        },
        {
          title:"SIÊU THÁNH SIM có ưu điểm vượt trội nào?",
          image_url:"http://www.vegecity.com/images/VegeCity_FQA.jpg",
          buttons:[
            {
              type:"postback",
              payload:'{"question_id":7}',
              title:"Chi tiết"
            }
          ]
        },
        {
          title:"Tôi đang sử dụng Thánh Sim giờ muốn chuyển sang Siêu Thánh Sim thì làm như thế nào?",
          image_url:"http://www.vegecity.com/images/VegeCity_FQA.jpg",
          buttons:[
            {
              type:"postback",
              payload:'{"question_id":8}',
              title:"Chi tiết"
            }
          ]
        },
        {
          title:"Tôi đang dùng Thánh 2, gói này có những ưu đãi nào?",
          image_url:"http://www.vegecity.com/images/VegeCity_FQA.jpg",
          buttons:[
            {
              type:"postback",
              payload:'{"question_id":9}',
              title:"Chi tiết"
            }
          ]
        },
        {
          title:"Sử dụng SV2017 có ưu điểm vượt trội nào?",
          image_url:"http://www.vegecity.com/images/VegeCity_FQA.jpg",
          buttons:[
            {
              type:"postback",
              payload:'{"question_id":10}',
              title:"Chi tiết"
            }
          ]
        },
        {
          title:"Tôi kích hoạt sim SV2017 như thế nào?",
          image_url:"http://www.vegecity.com/images/VegeCity_FQA.jpg",
          buttons:[
            {
              type:"postback",
              payload:'{"question_id":11}',
              title:"Chi tiết"
            }
          ]
        },
        {
          title:"Sau khi kích hoạt, tôi có được hưởng ưu đãi về giá cước luôn khôn",
          image_url:"http://www.vegecity.com/images/VegeCity_FQA.jpg",
          buttons:[
            {
              type:"postback",
              payload:'{"question_id":12}',
              title:"Chi tiết"
            }
          ]
        },
        {
          title:"Làm thế nào để kích hoạt SIM?",
          image_url:"http://www.vegecity.com/images/VegeCity_FQA.jpg",
          buttons:[
            {
              type:"postback",
              payload:'{"question_id":13}',
              title:"Chi tiết"
            }
          ]
        },
        {
          title:"Tôi nên nạp thẻ bao nhiêu để gia hạn ưu đãi miễn phí dữ lại liệu?",
          image_url:"http://www.vegecity.com/images/VegeCity_FQA.jpg",
          buttons:[
            {
              type:"postback",
              payload:'{"question_id":14}',
              title:"Chi tiết"
            }
          ]
        },
        {
          title:"Thánh Sim cần điều kiện gì để duy trì ưu đãi không?",
          image_url:"http://www.vegecity.com/images/VegeCity_FQA.jpg",
          buttons:[
            {
              type:"postback",
              payload:'{"question_id":15}',
              title:"Chi tiết"
            }
          ]
        },
        {
          title:"Tôi nghe nói Thánh Sim trong trạng thái S1/S2 sẽ bị mất ưu đãi của Thánh Sim đúng không?",
          image_url:"http://www.vegecity.com/images/VegeCity_FQA.jpg",
          buttons:[
            {
              type:"postback",
              payload:'{"question_id":16}',
              title:"Chi tiết"
            }
          ]
        },
        {
          title:"Gói Thánh 2 này có thể chuyển đổi sang gói Siêu Thánh Sim hoặc BOM SIM được không?",
          image_url:"http://www.vegecity.com/images/VegeCity_FQA.jpg",
          buttons:[
            {
              type:"postback",
              payload:'{"question_id":17}',
              title:"Chi tiết"
            }
          ]
        },
        {
          title:"Làm thế nào để đăng ký DV nhạc chờ của Vietnamobile?",
          image_url:"http://www.vegecity.com/images/VegeCity_FQA.jpg",
          buttons:[
            {
              type:"postback",
              payload:'{"question_id":18}',
              title:"Chi tiết"
            }
          ]
        },
        {
          title:"Đăng ký dịch vụ cuộc gọi nhỡ của Vietnamobile như thế nào?",
          image_url:"http://www.vegecity.com/images/VegeCity_FQA.jpg",
          buttons:[
            {
              type:"postback",
              payload:'{"question_id":19}',
              title:"Chi tiết"
            }
          ]
        },
        {
          title:"MOOV là dịch vụ gì?",
          image_url:"http://www.vegecity.com/images/VegeCity_FQA.jpg",
          buttons:[
            {
              type:"postback",
              payload:'{"question_id":20}',
              title:"Chi tiết"
            }
          ]
        },
        {
          title:"Cách chặn cuộc gọi/ số thuê bao không mong muốn?",
          image_url:"http://www.vegecity.com/images/VegeCity_FQA.jpg",
          buttons:[
            {
              type:"postback",
              payload:'{"question_id":21}',
              title:"Chi tiết"
            }
          ]
        },
        {
          title:"Cách tra cứu và hủy dịch vụ đang sử dụng như thế nào?",
          image_url:"http://www.vegecity.com/images/VegeCity_FQA.jpg",
          buttons:[
            {
              type:"postback",
              payload:'{"question_id":22}',
              title:"Chi tiết"
            }
          ]
        },
        {
          title:"Làm thế nào để tắt thông báo tự động hiện trên màn hình?",
          image_url:"http://www.vegecity.com/images/VegeCity_FQA.jpg",
          buttons:[
            {
              type:"postback",
              payload:'{"question_id":23}',
              title:"Chi tiết"
            }
          ]
        },
        {
          title:"Cách đăng ký dịch vụ 3G/4G? ",
          image_url:"http://www.vegecity.com/images/VegeCity_FQA.jpg",
          buttons:[
            {
              type:"postback",
              payload:'{"question_id":24}',
              title:"Chi tiết"
            }
          ]
        },
        {
          title:"Hướng dẫn cách cài đặt cấu hình 3G Vietnamobile",
          image_url:"http://www.vegecity.com/images/VegeCity_FQA.jpg",
          buttons:[
            {
              type:"postback",
              payload:'{"question_id":25}',
              title:"Chi tiết"
            }
          ]
        },
        {
          title:"Vùng phủ sóng 3G/ 4G mới nhất của Vietnamobile? ",
          image_url:"http://www.vegecity.com/images/VegeCity_FQA.jpg",
          buttons:[
            {
              type:"postback",
              payload:'{"question_id":26}',
              title:"Chi tiết"
            }
          ]
        },
        {
          title:"Các gói cước dữ liệu mà Vietnamobile đang cung cấp ngoài thị trường? ",
          image_url:"http://www.vegecity.com/images/VegeCity_FQA.jpg",
          buttons:[
            {
              type:"postback",
              payload:'{"question_id":27}',
              title:"Chi tiết"
            }
          ]
        },
    ],
    dictionaryAI: [
        {
            question_id: null,
            question: "",
            keyword: ["Bắt đầu"],
            group:"",
            answer: "Xin chào quý khách, đây là chatbot của VNM, chúng tôi có thể hỗ trợ gì cho quý khách? Quý khách có thể chọn vấn đề mà quý khách đang quan tâm dưới đây.",
            lang: "vi_VN"
        },
        {
            question_id: null,
            question: "",
            keyword: ["Get Started"],
            group:"",
            answer: "Xin chào quý khách, đây là chatbot của VNM, chúng tôi có thể hỗ trợ gì cho quý khách? Quý khách có thể chọn vấn đề mà quý khách đang quan tâm dưới đây.",
            lang: "vi_VN"
        },
        {
            question_id: 1,
            question: "BOM SIM có những ưu đãi gì?",
            keyword: ["bom sim", "ưu đãi","bom sim"],
            sim_type:"BOM SIM",
            group:"Sản phẩm",
            answer: "Bom Sim là một gói cước rất nhiều ưu đãi hấp dẫn như sau:\n* Miễn phí gọi và gửi tin nhắn nội mạng\n* Miễn phí 50 phút gọi ngoại mạng\n* Miễn phí Data truy cập\n* Không duy trì mức cam kết tiêu dùng hàng tháng\n* Chính sách sử dụng dài lâu, mỗi lần có 1 giao dịch, sim sẽ được gia hạn tối đa thành 60 ngày.",
            lang: "vi_VN"
        },
        {
            question_id: 2,
            question: "Làm thế nào để kích hoạt SIM?",
            keyword: ["kích hoạt sim", "làm thế nào","bom sim"],
            sim_type:"BOM SIM",
            group:"Sản phẩm",
            answer: "Với BOM SIM,bạn có thể chọn 1 trong 2 cách để kích hoạt:\n* Cách 1: thao tác gọi 123.\n* Cách 2: nạp tối thiểu 10.000đ. Nếu nạp < 10.000đ, SIM không được kích hoạt nhưng TKC vẫn được cộng giá trị đã nạp.",
            lang: "vi_VN"
        },
        {
            question_id: 3,
            question: "Tại sao sim tôi bị khóa 1 chiều nhưng nạp 20k chỉ dùng được mấy ngày đã hết data rồi?",
            keyword: ["data","khóa 1 chiều", "bom sim"],
            sim_type:"BOM SIM",
            group:"Sản phẩm",
            answer: "Cước truy cập data theo gói bạn đang sử dụng là 5d/100KB và VNM trừ tối đa 5000đ/3GB/ngày. Để tiết kiệm và chủ động quản lý dữ liệu bạn có thể đăng ký gói bổ trợ A1, chỉ với 40.000đ/tháng bạn được miễn phí 4GB/ngày, miễn phí 50 phút gọi ngoại mạng, gọi nội mạng và gửi tin nội mạng nhắn miễn phí",
            lang: "vi_VN"
        },
        {
            question_id: 4,
            question: "Tôi cùng sử dụng BOM SIM tại sao tôi thấy số thuê bao khác được miễn phí 50p gọi ngoại mạng mà số thuê bao của tôi không được?",
            keyword: ["bom sim","miễn phí"],
            sim_type:"BOM SIM",
            group:"Sản phẩm",
            answer: "Để nhận 50 phút gọi ngoại mạng, sau khi kích hoạt bạn vui lòng thao tác trên máy *868#OK hoặc phát sinh cước trong vòng 120 ngày kể từ khi kích hoạt.",
            lang: "vi_VN"
        },
        {
            question_id: 5,
            question: "Tôi quên nạp 40.000đ để gia hạn ưu đãi của gói cước, tôi nên làm gì để kích hoạt lại ưu đãi này?",
            keyword: ["siêu thánh sim","gian hạn", "kích hoạt"],
            sim_type:"Siêu thánh SIM",
            group:"Sản phẩm",
            answer: "Nếu trong vòng 15 ngày bạn chỉ cần nạp tiền tối thiểu 40.000đ để hệ thống tự động gia hạn gói cước A1. Quá 15 ngày, để kích hoạt ưu đãi, ngoài việc nạp tiền tối thiểu 40.000đ, bạn vui lòng soạn tin để kích hoạt lại ưu đãi: A1 gửi 345 hoặc DK A1 gửi 345",
            lang: "vi_VN"
        },
        {
            question_id: 6,
            question: "Tôi có thể mua SIÊU THÁNH SIM mới ở đâu? ",
            keyword: ["siêu thánh sim","mua siêu thánh sim", "mua hàng"],
            sim_type:"Siêu thánh SIM",
            group:"Sản phẩm",
            answer: "Hiện SIÊU THÁNH SIM đã có mặt tại các cửa hàng VNM trên toàn quốc với giá 60,000đ, bạn vui lòng cung cấp cho VNM địa chỉ gần nhất khu vực của mình hiện đang ở để bên em có thể kiểm tra điểm VNM gần nhất cho bạn.",
            lang: "vi_VN"
        },
        {
            question_id: 7,
            question: "SIÊU THÁNH SIM có ưu điểm vượt trội nào?",
            keyword: ["siêu thánh sim","ưu điểm"],
            sim_type:"Siêu thánh SIM",
            group:"Sản phẩm",
            answer: "SIÊU THÁNH SIM đảm bảo mọi yêu cầu sử dụng của bạn với các ưu điểm vượt trội như:\n* Miễn phí data.\n* Miễn phí nội mạng (thoại, tin nhắn).\n* Thoại ngoại mạng chỉ 550d/phút\n* Điều kiện duy trì ưu đãi: nạp thẻ và tiêu dùng tối thiểu 40,000đ/tháng.",
            lang: "vi_VN"
        },
        {
            question_id: 8,
            question: "Tôi đang sử dụng Thánh Sim giờ muốn chuyển sang Siêu Thánh Sim thì làm như thế nào?",
            keyword: ["siêu thánh sim","thánh sim", "chuyển đổi gói"],
            sim_type:"Siêu thánh SIM",
            group:"Sản phẩm",
            answer: "Để chuyển đổi sang Siêu Thánh Sim bạn phải có tối thiểu 40.000đ trong tài khoản chính, sau đó bạn thao tác trên máy bấm *989# để chuyển đổi. Nhưng lưu ý hệ thống chỉ bảo lưu TKC các tài khoản khuyến mại không được bảo lưu, các dịch vụ giá trị gia tăng bạn đang sử dụng sẽ không được bảo lưu hoặc gia hạn mới sau khi chuyển đổi. Nếu muốn tiếp tục sử dụng, bạn vui lòng đăng ký lại. ",
            lang: "vi_VN"
        },
        {
            question_id: 9,
            question: "Tôi đang dùng Thanh 2, gói này có những ưu đãi nào?",
            keyword: ["thánh","thánh 2", "thánh sim"],
            sim_type:"THÁNH 2",
            group:"Sản phẩm",
            answer: "Thánh 2 có nhiều ưu đãi hấp dẫn cho người sử dụng như:\n* Không phí cam kết hàng tháng.\n* Cước gọi nội/ ngoại mạng chỉ 680đ/ phút\n* Cước tin nhắn nội/ ngoại mạng: 300đ/ tin\n* Cước truy cập data: 50đ/MB\n* Hạn sử dụng: phụ thuộc mệnh giá thẻ nạp và thuê bao được hưởng cơ chế lifetime (45 ngày)",
            lang: "vi_VN"
        },
        {
            question_id: 10,
            question: "Sử dụng SV2017 có ưu điểm vượt trội nào?",
            keyword: ["sv2017","ưu điểm"],
            sim_type:"SIM SV2017",
            group:"Sản phẩm",
            answer: "Sản phẩm SIM SV2017 được ra mắt trong mùa tựu trường năm 2017. Với sản phẩm này, bạn sẽ nhận được vô vàn ưu đãi từ nhà mạng Vietnamobile, mỗi tháng bạn sẽ nhận được:\n* 500MB.\n* Miễn phí thoại và SMS nội mạng (tối đa 360 phút/ngày).\n* Gọi ngoại mạng chỉ 680đ/ phút.\n* Miễn phí truy cập dữ liệu từ 1h00 - 5h59' hàng ngày.\n* Miễn phí truy cập Facebook.",
            lang: "vi_VN"
        },
        {
            question_id: 11,
            question: "Tôi kích hoạt sim SV2017 như thế nào?",
            keyword: ["sv2017","kích hoạt"],
            sim_type:"SIM SV2017",
            group:"Sản phẩm",
            answer: "Bạn kích hoạt SIM bằng cách nạp tối thiểu 20.000đ bằng thẻ cào hoặc airtime nhé",
            lang: "vi_VN"
        },
        {
            question_id: 12,
            question: "Sau khi kích hoạt, tôi có được hưởng ưu đãi về giá cước luôn không?",
            keyword: ["sv2017","kích hoạt","ưu đãi"],
            sim_type:"SIM SV2017",
            group:"Sản phẩm",
            answer: "Sau khi nạp 20.000đ để kích hoạt SIM, bạn sẽ được hưởng các ưu đãi của Vietnamobile trong đó có ưu đãi về cước thoại ngoại mạng và miễn phí nội mạng. Bạn cần lưu ý, cứ mỗi 30 ngày bạn vui lòng nạp đủ 20.000đ để duy trì ưu đãi này nhé.",
            lang: "vi_VN"
        },
        {
            question_id: 13,
            question: "Làm thế nào để kích hoạt SIM?",
            keyword: ["thánh sim","kích hoạt"],
            sim_type:"THÁNH SIM",
            group:"Sản phẩm",
            answer: "Với Thánh SIM, bạn có thể chọn 1 trong 2 cách để kích hoạt:\n* Cách 1: thao tác *999#OK.\n* Cách 2: nạp tối thiểu 20.000đ. Nếu nạp < 20.000đ, SIM không được kích hoạt nhưng TKC vẫn được cộng giá trị đã nạp.",
            lang: "vi_VN"
        },
        {
            question_id: 14,
            question: "Tôi nên nạp thẻ bao nhiêu để gia hạn ưu đãi miễn phí dữ lại liệu?",
            keyword: ["thánh sim","nạp thẻ","ưu đãi","miễn phí"],
            sim_type:"THÁNH SIM",
            group:"Sản phẩm",
            answer: "Hạn sử dụng dựa trên tổng giá trị thẻ nạp của thuê bao trong ngày (tính đến 23h59p59s)\n* 20.000đ ≤ TU < 50.000đ: 30 ngày\n* 50.000đ ≤ TU < 100.000đ: 90 ngày\n* 100.000đ ≤ TU < 200.000đ: 180 ngày\n* TU  ≥ 200.000đ: 356 ngày\nBạn lưu ý thời gian tối đa để được hưởng ưu đãi là 365 ngày.",
            lang: "vi_VN"
        },
        {
            question_id: 15,
            question: "Thánh Sim cần điều kiện gì để duy trì ưu đãi không?",
            keyword: ["thánh sim","ưu đãi"],
            sim_type:"THÁNH SIM",
            group:"Sản phẩm",
            answer: "Với Thánh Sim bạn cần lưu ý nạp và sử dụng tối thiểu 20k hàng tháng để duy trì ưu đãi, vì khi thuê bao bị khóa 1 chiều sẽ không quay lại Thánh sim được nhé",
            lang: "vi_VN"
        },
        {
            question_id: 16,
            question: "Tôi nghe nói Thánh Sim trong trạng thái S1/S2 sẽ bị mất ưu đãi của Thánh Sim đúng không?",
            keyword: ["thánh sim","s1/s2","ưu đãi"],
            sim_type:"THÁNH SIM",
            group:"Sản phẩm",
            answer: "Đúng, từ ngày 01.01.2019 Thánh Sim bị chặn 1c/2c VNM chuyển thuê bao sang gói cước Thánh 2 vì vậy bạn đang sử dụng Thánh Sim cần duy trì ưu đãi bằng cách nạp thẻ từ 20.000đ, vì khi thuê bao bị khóa 1 chiều sẽ không quay lại Thánh Sim nữa.\nSau Thánh SIM, Vietnamobile có ra mắt hai gói cước mới là Siêu Thánh SIM và BOM với nhiều ưu đãi vượt trội so với Thánh SIM bạn có thể tham khảo.\n* Siêu Thánh SIM : Miễn phí hoàn toàn Data & miễn phí nội mạng & thoại ngoại mạng chỉ 550 đ/phút chỉ cần nạp thẻ và tiêu dùng tối thiểu 40,000 đ/tháng\n* BOM SIM:  4GB tốc độ cao/ngày & 50 phút ngoại mạng & miễn phí gọi và nhắn tin nội mạng,  không cam kết duy trì mức tiêu dùng hàng tháng, dùng bao nhiêu trả bấy nhiêu với giá cước gọi chỉ 680đ/ phút. Đặc biệt, BOM SIM áp dụng chính sách sử dụng dài lâu, mỗi lần có 1 giao dịch, sim sẽ được gia hạn tối đa thành 60 ngày.",
            lang: "vi_VN"
        },
        {
            question_id: 17,
            question: "Gói Thánh 2 này có thể chuyển đổi sang gói Siêu Thánh Sim hoặc BOM SIM được không?",
            keyword: ["thánh sim","kích hoạt"],
            sim_type:"THÁNH SIM",
            group:"Sản phẩm",
            answer: "Được, để chuyển đối sang gói Bom Sim, Siêu Thánh Sim, tại thời điểm chuyển đổi TKC ≥ 40.000, bạn vui lòng thao tác trên máy như sau:\n* Siêu Thánh Sim: *989#OK\n* Bom Sim: *868#OK\nChúc bạn chuyển đổi thành công.",
            lang: "vi_VN"
        },
        {
            question_id: 18,
            question: "Làm thế nào để đăng ký DV nhạc chờ của Vietnamobile?",
            keyword: ["thánh sim","kích hoạt"],
            sim_type:"VAS",
            group:"VAS",
            answer: "Với 9.000đ/ tháng, trong lúc chờ kết nối với bạn sẽ được nghe những bản nhạc hot, giai điệu tuyệt vời thay cho âm thanh tút tút nhàm chán.\n* Cách đăng ký: soạn DK HR gửi 123\n* Tìm mã bài: soạn TIMTEN gửi 2345 hoặc truy cập link http://happyring.vietnamobile.com.vn/media/lookupNewSong.action?name=module.fav.newsong\n* Mua bài hát: soạn MUA gửi 2345 với giá chỉ 3.000đ - 5.000đ/ bài",
            lang: "vi_VN"
        },
        {
            question_id: 19,
            question: "Đăng ký dịch vụ cuộc gọi nhỡ của Vietnamobile như thế nào?",
            keyword: ["vas","dịch vụ vas","cuộc gọi nhỡ","dịch vụ"],
            sim_type:"VAS",
            group:"VAS",
            answer: "Bạn có thể biết những ai gọi đến dù điện thoại đang tắt hoặc đang ở ngoài vùng phủ sóng với dịch vụ thông báo cuộc gọi nhỡ của VNM. VNM đang cung cấp 2 gói cơ bản và gói nâng cao cho dịch vụ này.\n* Gói cơ bản: 6.000đ/ tháng, soạn DK MCA gửi 2626\n* Gói nâng cao: 9.000đ/ tháng, soạn DK MCAB gửi 2626\nĐiểm khác nhau giữa 2 gói này là khi số thuê bao cần kết nối (nội mạng) mở máy thì bạn sẽ nhận được thông báo để liên hệ lại với họ.",
            lang: "vi_VN"
        },
        {
            question_id: 20,
            question: "MOOV là dịch vụ gì?",
            keyword: ["vas","dịch vụ vas","MOOV","dịch vụ","moov"],
            sim_type:"VAS",
            group:"VAS",
            answer: "Dịch vụ mang đến trải nghiệm âm nhạc chất lượng cao cho KH của Vietnamobile. Cùng với MOOV, bạn có thể thưởng thức các bài hát độc quyền, vô vàn giai điệu có bản quyền và đặc biệt là được giảm giá từ 5% -20% trên hóa đơn thanh toán nhiều dịch vụ/sản phẩm.\nNhanh tay soạn tin đăng ký dịch vụ nhé:\n * Gói ngày: DK MV1 gửi 345 (2.000đ/ ngày)\n * Gói tuần: DK MOV7 gửi 345 (5.000đ/ tuần)\n * Gói tháng: DK MV gửi 345 (30.000đ/ tháng)",
            lang: "vi_VN"
        },
        {
            question_id: 21,
            question: "Cách chặn cuộc gọi/ số thuê bao không mong muốn?",
            keyword: ["vas","dịch vụ vas","dịch vụ","chặn cuộc gọi"],
            sim_type:"VAS",
            group:"VAS",
            answer: "Với dịch vụ chặn cuộc gọi, Vietnamobile sẽ giúp bạn chủ động chặn ngay các số thuê bao nội mạng/ ngoại mạng/ quốc tế quấy rối. Hiện VNM đang cung cấp 2 gói cơ bản và nâng cao cho dịch vụ chặn cuộc gọi:\n * Gói cơ bản: chặn tối đa 10 số. Soạn DK CB gửi 345 (6.000đ/ tháng)\n * Gói nâng cao: không giới hạn số cần chặn. Soạn DK CB VIP gửi 345 (9.000đ/ tháng)",
            lang: "vi_VN"
        },
        {
            question_id: 22,
            question: "Cách tra cứu và hủy dịch vụ đang sử dụng như thế nào?",
            keyword: ["vas","dịch vụ vas","dịch vụ","hủy dịch vụ", "tra cứu"],
            sim_type:"VAS",
            group:"VAS",
            answer: "Để kiểm tra mình đã sử dụng dịch vụ gì trong 30 ngày gần nhất, bạn chỉ cần soạn tin theo cú pháp:\nKTDV gửi 555\n * Để hủy toàn bộ dịch vụ đang sử dụng, soạn tin:\nHUY TBDV gửi 555",
            lang: "vi_VN"
        },
        {
            question_id: 23,
            question: "Làm thế nào để tắt thông báo tự động hiện trên màn hình?",
            keyword: ["vas","dịch vụ vas","dịch vụ","thông báo"],
            sim_type:"VAS",
            group:"VAS",
            answer: "Đây là các tin nhắn dạng Flash SMS giới thiệu về các dịch vụ Live News. Để tắt các thông báo này bạn soạn tin:\nHUY gửi 2230",
            lang: "vi_VN"
        },
        {
            question_id: 24,
            question: "Cách đăng ký dịch vụ 3G/4G? ",
            keyword: ["dữ liệu","data","đăng ký","3g","4g"],
            sim_type:"Dữ liệu",
            group:"Dữ liệu",
            answer: "Dịch vụ 3G/ 4G đã được kích hoạt sẵn trên SIM và Vietnamobile cũng đã hỗ trợ cài đặt sẵn cấu hình trên các thiết bị di động. Bạn chỉ cần bật tính năng truy cập dữ liệu mạng trên điện thoại và bắt đầu sử dụng dữ liệu.\nLưu ý: đăng ký gói bổ trợ dữ liệu sẽ giúp bạn tiết kiệm được chi phí hơn. ",
            lang: "vi_VN"
        },
        {
            question_id: 25,
            question: "Hướng dẫn cách cài đặt cấu hình 3G Vietnamobile",
            keyword: ["dữ liệu","data","cài đặt"],
            sim_type:"Dữ liệu",
            group:"Dữ liệu",
            answer: "Bạn hãy chọn hệ điều hành của thiết bị đang sử dụng:\n *Với hệ điều hành IOS:  Vào Settings > General> Network > Cellular Data Network – tại đây vui lòng nhập thông tin : APN: internet. Các phần khác để trống.\n* Với hệ điều hành Android: Trên màn hình điện thoại nhấn Menu > settings >Wireless controls > Mobile networks > Access Point Name rồi chọn nút Menu và chọn New APN> chọn Name điền thông tin: Vietnamobile nhấn ok > lựa chọn APN và điền thông tin: internet sau đó ấn ok Các phần khác để trống. Tiếp tục Ấn Menu chọn save – sau đó ấn nút tròn bên cạnh chữ Vietnamobile để truy cập internet – Ấn nút Home để kết thúc quy trình cài đặt cấu hình\n *Với hệ điều hành Window Phone: Bạn chọn Cellular > Data connection > on – Vào menu chọn Network Setup -Chạm vào phím … tại góc phải màn hình và chọn Add apn – Nhập thông số APN: internet – Các phần khác để trống – Tiếp tục đánh dấu stick vào mục Make this my current APN để kích hoạt cấu hình.",
            lang: "vi_VN"
        },
        {
            question_id: 26,
            question: "Vùng phủ sóng 3G/ 4G mới nhất của Vietnamobile? ",
            keyword: ["dữ liệu","data","3g","4g","phủ sóng"],
            sim_type:"Dữ liệu",
            group:"Dữ liệu",
            answer: "Hiện nay, tất cả các thành phố, thị xã, các khu vực đông dân cư đều có sóng 3G và Vietnamobile đang nỗ lực cung cấp dịch vụ 3G tới các khu vực nông thôn và vùng núi.\nĐặc biệt, Vietnamobile đã cung cấp dịch vụ 4G tại 24 tỉnh thành phố và các trạm phát sóng 4G của Vietnamobile tăng hàng giờ. Để có thông tin chính xác nhất về vùng phủ sóng của Vietnamobile, ban vui lòng quay số 789 để được hỗ trợ miễn phí. ",
            lang: "vi_VN"
        },
        {
            question_id: 27,
            question: "Các gói cước dữ liệu mà Vietnamobile đang cung cấp ngoài thị trường? ",
            keyword: ["dữ liệu","data",""],
            sim_type:"VAS",
            group:"VAS",
            answer: "",
            lang: "vi_VN"
        }

    ],
};