import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {SQLite} from 'ionic-native';
import 'rxjs/add/operator/map';

/*
  Generated class for the Database provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Database {
  private storage: SQLite;
  private isOpen: boolean;

  public constructor() {
    if (!this.isOpen) {
      this.storage = new SQLite();
      this.storage.openDatabase({ name: 'lvdt.db', location: 'default' }).then(() => {
        this.storage.executeSql('CREATE TABLE IF NOT EXISTS batmon (id INTEGER PRIMARY KEY, name TEXT, details TEXT)', []).then(() => {
          this.storage.executeSql('INSERT INTO batmon VALUES (?,?,?)', [1, 'Sinh', 'Sinh nghĩa là: Sống, là sự bắt đầu (cho một việc, một cái gì đó), là ý tưởng ban đầu, là mầm cây, là cỏ, là cây nhỏ, là loại cây mềm yếu (cây Liễu chẳng hạn), là mùa xuân, là sự hứa hẹn, là hy vọng. Cung Sinh là Âm Mộc, nhưng nghĩa Sinh thuộc Dương Mộc. Độ số là 3. Về phương vị là chính Đông. Về màu sắc là xanh lá mạ, xanh non.']);
          this.storage.executeSql('INSERT INTO batmon VALUES (?,?,?)', [2, 'Thương', 'Thương nghĩa là: Buồn, là thuộc trạng thái tình cảm, là cây lớn, là sự phát triền sung mãn sắp chuyển sang giai đoạn suy vi. Cung Thương là Dương Mộc, nhưng nghĩa của Thương thuộc Âm Mộc. Độ số là 8. Về phương vị là Đông Bắc. Về màu sắc là xanh lá cây xậm.']);
          this.storage.executeSql('INSERT INTO batmon VALUES (?,?,?)', [3, 'Đỗ', 'Đỗ nghĩa là: Đạt, là sự thành đạt, là kết quả tốt đẹp, là được việc, là quí nhân phù trợ. Cung Đỗ là Âm Hoả, nhưng nghĩa của Đỗ thuộc Dương Hoả. Độ số là 7. Về Phương vị là chính Nam. Về màu sắc là màu đỏ.']);
          this.storage.executeSql('INSERT INTO batmon VALUES (?,?,?)', [4, 'Cảnh', 'Cảnh nghĩa là: Đi chơi ở trong sự nhàn hạ, phong lưu.Là từ xa tới, là du lịch, là đi xa, là vẻ đẹp, là nhà đẹp, cao rộng có vườn cây hoặc nội thất rực rỡ. Cung Cảnh thuộc Dương Hoả, nhưng nghĩa của Cảnh thuộc Âm Hoả. Độ số là 2. Về phương vị là Đông Nam. Về màu sắc là màu đỏ nâu. Cảnh, vì là Âm Hỏa – chính vị Khôn Thổ (Theo Hậu thiên Lạc Việt) – nên còn có ý nghĩa là Âm Thổ: miếng đất đẹp.']);
          this.storage.executeSql('INSERT INTO batmon VALUES (?,?,?)', [5, 'Tử', 'Tử nghĩa là: Chết, sự chấm dứt, kết thúc, là cắt đứt, là sát phạt, là tiền bạc tài sản lưu động, là người làm nghề cơ khí, kim khí, là võ nghiệp, nếu là bác sĩ thì liên quan đến mổ xẻ, là nghe. Cung Tử thuộc Âm Kim, nhưng nghĩa của Tử thuộc Dương Kim. Độ số là 9. Về phương vị là chính Tây. Về màu sắc là màu trắng. Tử, cũng còn có nghĩa là con cái.']);
          this.storage.executeSql('INSERT INTO batmon VALUES (?,?,?)', [6, 'Kinh', 'Kinh nghĩa là: Kinh sợ, đột ngột, sự bất ngờ, là giật gân, là người làm việc táo bạo, mạo hiểm. Cung Kinh thuộc Dương Kim, nhưng nghĩa của Kinh thuộc Âm Kim. Độ số là 4. Về màu sắc là trắng xám.']);
          this.storage.executeSql('INSERT INTO batmon VALUES (?,?,?)', [7, 'Khai', 'Khai nghĩa là dòng nước chảy, là sự khai thông, là trôi đi, là thoát khỏi sự bế tắc, là đi xa thuận lợi. Cung Khai thuộc Âm Thuỷ, nhưng nghĩa của Khai thuộc Dương Thuỷ. Độ số là 1. Về màu sắc là xanh dương, là đen bóng.']);
          this.storage.executeSql('INSERT INTO batmon VALUES (?,?,?)', [8, 'Hưu', 'Hưu nghĩa là: Nghỉ, sự ngưng trệ, sự nghỉ ngơi do bất lực, kiệt sức, là bế tắc. Cung Hưu thuộc Dương Thuỷ, nhưng nghĩa của Hưu thuộc Âm Thuỷ. Độ số là 6. Về màu là màu đen xỉn, xanh đen.']);
          this.storage.executeSql('INSERT INTO batmon VALUES (?,?,?)', [0, 'Hưu', 'Hưu nghĩa là: Nghỉ, sự ngưng trệ, sự nghỉ ngơi do bất lực, kiệt sức, là bế tắc. Cung Hưu thuộc Dương Thuỷ, nhưng nghĩa của Hưu thuộc Âm Thuỷ. Độ số là 6. Về màu là màu đen xỉn, xanh đen.']);
        });
        this.storage.executeSql('CREATE TABLE IF NOT EXISTS lucnham (id INTEGER PRIMARY KEY, name TEXT, details TEXT)', []).then(() => {
          this.storage.executeSql('INSERT INTO lucnham VALUES (?,?,?)', [1, 'Đại An', 'Đại an thuộc Dương Thổ, nghĩa là bình yên lớn. Tính chất chậm chạp nhưng chắc chắn, thuộc về tài sản là nhà đất lớn, là miếng đất hoặc vùng đất lớn, là nguồn lợi ổn định, chắc chắn. Về người là bậc quân tử chín chắn, nữ hiền hậu tính cách điềm đạm, là người đầy đặn, béo tốt. Về công việc là sự ổn định, là người làm tại nơi trung tâm, có quyền chức địa vị. Về nơi làm việc là cơ quan hoặc bộ phận quan trọng. Về bệnh liên quan đến dạ dày hoặc tỳ. Về phương vị là nơi trung tâm. Về màu sắc là màu vàng thổ. Độ số là 5.']);
          this.storage.executeSql('INSERT INTO lucnham VALUES (?,?,?)', [2, 'Lưu Niên', 'Lưu niên thuộc Thuỷ, nghĩa là giữ lại thời gian. Có tính hiểm độc, lừa dối, âm mưu, là mưu toan, là sự do dự, lo lắng. Thuộc về tài sản là thất thoát, phá sản. Thuộc về sự việc là trì trệ. Là công việc không chính danh, có tính phiêu lưu mạo hiểm, là phi pháp, phi đạo đức. Là chết chóc tai nạn. Về bệnh thì liên quan đến máu huyết hoặc thận. Về phương vị là phương Bắc hoặc Tây Bắc. Về màu là màu đen hoặc xanh dương. Về độ số là 1 và 6.']);
          this.storage.executeSql('INSERT INTO lucnham VALUES (?,?,?)', [3, 'Tốc Hỷ', 'Tốc hỷ thuộc Hoả, nghĩa là sự vui vẻ, may mắn, là nhanh chóng, là tốt đẹp sáng sủa. Về người là quí nhân hay giúp đỡ người khác, là người thông minh, tài cao học rộng. Về công việc là chính danh, về học vấn là sự thành đạt, có học vị cao, là những dịch vụ phục vụ cho vẻ đẹp, cho nhu cầu tinh thần. Về hiện tượng là thuộc về văn hóa, giáo dục. Là người mang những giá trị tinh thần cao quí. Về bệnh liên quan đến tim hoặc tinh thần. Về màu sắc là màu đỏ, về phương vị là hướng Nam hoặc Đông Nam. Về độ số là 2 và 7.']);
          this.storage.executeSql('INSERT INTO lucnham VALUES (?,?,?)', [4, 'Xích Khẩu', 'Xích khẩu thuộc Kim. Nghĩa là sự tranh luận, cãi nhau, tiếng ồn ào, tiếng động. Về sự việc là tranh chấp kiện tụng. Về nghề nghiệp là nghề liên quan đến kim khí, máy móc; liên quan đến miệng như: dạy học, luật sư, quảng cáo, thông tin… Về người là người hay nói, lý luận khúc chiết, là người thấp, đầy đặn, nhiều lý trí. Về bệnh tật là bệnh liên quan đến phổi, tai, xương cốt. Về hướng là hướng Tây hoặc Tây Nam. Về màu sắc là màu trắng hoặc xám trắng. Về độ số là 4 và 9.']);
          this.storage.executeSql('INSERT INTO lucnham VALUES (?,?,?)', [5, 'Tiểu Cát', 'Tiểu cát thuộc Mộc. Nghĩa là niềm vui nhỏ, là tin tức vui, là tình cảm, tình yêu, sự quí mến. Về sự vật là sách vở, là tri thức, học hành, là cây cối. Về người là người giàu tình cảm, là hôn nhân, tình duyên. Về nghề nghiệp là người buôn bán nhỏ, có tiểu lợi, là người làm ăn liên quan đến gỗ cây, sách vở, tri thức… Về hình thể là người yểu điệu, mình dây, duyên dáng; đàn ông cao gầy có tính hiền, ham học hỏi. Về bệnh liên quan đến gan.Về hướng là hướng Đông hoặc Đông Bắc. Về màu sắc là màu xanh lá cây. Về độ số là 3 và 8.']);
          this.storage.executeSql('INSERT INTO lucnham VALUES (?,?,?)', [6, 'Vô Vong', 'Vô vong thuộc Âm Thổ. Nghĩa là không được việc gì, hoặc không sao cả; là đất bỏ hoang. Về người là người vô tích sự, thất nghiệp. Gặp hạn thì hoá giải. Về màu sắc là màu vàng đất xỉn. Về phương vị là ở cạnh nơi trung tâm, ở phía dưới, là nền nhà. Về độ số là 10.']);
          this.storage.executeSql('INSERT INTO lucnham VALUES (?,?,?)', [0, 'Vô Vong', 'Vô vong thuộc Âm Thổ. Nghĩa là không được việc gì, hoặc không sao cả; là đất bỏ hoang. Về người là người vô tích sự, thất nghiệp. Gặp hạn thì hoá giải. Về màu sắc là màu vàng đất xỉn. Về phương vị là ở cạnh nơi trung tâm, ở phía dưới, là nền nhà. Về độ số là 10.']);
        });
        this.storage.executeSql('CREATE TABLE IF NOT EXISTS tongket (idBatMon INTEGER PRIMARY KEY, idLucNham INTEGER PRIMARY KEY, details TEXT)', []).then(() => {
          this.storage.executeSql('INSERT INTO tongket VALUES (?,?,?)', [1, 1, 'Sinh Mộc khắc Đại An Thổ. Tượng bãi cỏ xanh tốt rộng lớn. Quẻ tốt , chậm chắc chắn sẽ thảnh công. Khó khăn không đáng kể.']);
          this.storage.executeSql('INSERT INTO tongket VALUES (?,?,?)', [1, 2, 'Nội sinh ngoại. Hoàn cảnh thuận lợi. Nhưng trong lòng hồ nghi, không quyết đoán. Chuyện xấu mới đến. Cần suy ngẫm chín chắn.']);
          this.storage.executeSql('INSERT INTO tongket VALUES (?,?,?)', [1, 3, 'Sinh Mộc sinh Tốc Hỷ Hoả. Tượng cỏ khô đốt lửa. Điều kiện tuy thuận lợi nhưng klhông thoả mãn nhu cầu. Nôn nóng thất bại.']);
          this.storage.executeSql('INSERT INTO tongket VALUES (?,?,?)', [1, 4, 'Nội khắc ngoại. Việc quyết tâm thì sẽ thành, cần bàn bạc kỹ lưỡng. Lợi đến từ tiền bạc, quan hệ. Cẩn thận tranh chấp cữ cãi liên quan đến giấy tờ.']);
          this.storage.executeSql('INSERT INTO tongket VALUES (?,?,?)', [1, 5, 'Lưỡng Mộc thành Lâm. Quẻ tốt.  Mọi việc tiệm tiến hanh thông, do tính của mộc phát chậm. Phải biết thuận thế phát triển.']);
          this.storage.executeSql('INSERT INTO tongket VALUES (?,?,?)', [1, 6, 'Ngoại khắc nội. Ngoại lực yếu không được việc, không khắc được. Hy vọng đến, nhưng việc không thành. Lợi cho việc Thổ mộc (Sửa chữa nhà cửa).']);
          this.storage.executeSql('INSERT INTO tongket VALUES (?,?,?)', [1, 0, 'Ngoại khắc nội. Ngoại lực yếu không được việc, không khắc được. Hy vọng đến, nhưng việc không thành. Lợi cho việc Thổ mộc (Sửa chữa nhà cửa).']);
          this.storage.executeSql('INSERT INTO tongket VALUES (?,?,?)', [2, 1, 'Ngoại khắc nội. lợi việc Thổ Mộc (Xây dựng nhà cửa). Chuyện buồn, thương tổn. Nhưng quẻ nội mạnh sẽ qua.']);
          this.storage.executeSql('INSERT INTO tongket VALUES (?,?,?)', [2, 2, 'Lưu Niên Thuỷ sinh Thương Mộc. Hoàn cảnh buồn bã, khiến lo lắng không yên. Mưu sự cũng thất bại. Phải chờ đợi.']);
          this.storage.executeSql('INSERT INTO tongket VALUES (?,?,?)', [2, 3, 'Ngoại sinh nội. Hoàn cảnh tuy khó khăn, nhưng nhờ trí tuệ và sự trong sáng sẽ thành công. ứng xử vui vẻ. Giống như một người bị chủ nợ đến đòi, tiếp họ vui vẻ, cứ hoàn cảnh thực mà khất nợ, sẽ qua được.']);
          this.storage.executeSql('INSERT INTO tongket VALUES (?,?,?)', [2, 4, 'Xích khẩu Kim khắc thương Mộc. Chủ tranh chấp tổn hại. Việc thành nhưng bất lợi về tình.']);
          this.storage.executeSql('INSERT INTO tongket VALUES (?,?,?)', [2, 5, 'Nội ngoại ngang hòa. Vượng vào mùa Đông - Xuân. Hợp Hợi Mão Mùi, Thân Tý Thìn. Chuyện tình cảm buồn. Nhưng có hậu về sau. Sự việc thành nhưng chậm.']);
          this.storage.executeSql('INSERT INTO tongket VALUES (?,?,?)', [2, 6, 'Thương Mộc khắc Vô Vong Thổ. Tượng nhà tranh xiêu veo, sụp nát. Việc buồn không thành.']);
          this.storage.executeSql('INSERT INTO tongket VALUES (?,?,?)', [2, 0, 'Thương Mộc khắc Vô Vong Thổ. Tượng nhà tranh xiêu veo, sụp nát. Việc buồn không thành.']);
          this.storage.executeSql('INSERT INTO tongket VALUES (?,?,?)', [3, 1, 'Đỗ Hoả sinh Đại An Thổ. Ngoại sinh nội. Thuận lợi, Tốt. Chủ về Công danh tài lợi.']);
          this.storage.executeSql('INSERT INTO tongket VALUES (?,?,?)', [3, 2, 'Lưu Niên thuỷ khắc Đỗ Hoả. Nội khắc ngoại. Hình thức không phản ánh nội dung. Cẩn thận với hình thức bên ngoài của đối tượng.']);
          this.storage.executeSql('INSERT INTO tongket VALUES (?,?,?)', [3, 3, 'Đỗ Hoả ngang hoà Tốc Hỷ Hoả. Hoà hợp, đồng thuận. Mọi việc tốt đẹp. Chủ về công danh, tiếng tăm, tri tuệ.']);
          this.storage.executeSql('INSERT INTO tongket VALUES (?,?,?)', [3, 4, 'Ngoại khắc nội. Bề ngoài tuy nhiệt tình, nhưng bên trong còn phân vân chưa quyết. Cuối cùng sẽ đạt. Thích hợp với việc tiệc tùng, ăn nhâu, tranh luận, bàn cãi.']);
          this.storage.executeSql('INSERT INTO tongket VALUES (?,?,?)', [3, 5, 'Tiểu Cát Mộc sinh Đỗ Hoả. Nội sinh ngoại. Việc thành đạt co cố gắng, Tiểu lợi.']);
          this.storage.executeSql('INSERT INTO tongket VALUES (?,?,?)', [3, 6, 'Ngoại sinh nội. Một kẻ được nâng đỡ nhiệt tình,nhưng nội lực yếu. Cuối cùng không được việc.']);
          this.storage.executeSql('INSERT INTO tongket VALUES (?,?,?)', [3, 0, 'Ngoại sinh nội. Một kẻ được nâng đỡ nhiệt tình,nhưng nội lực yếu. Cuối cùng không được việc.']);
          this.storage.executeSql('INSERT INTO tongket VALUES (?,?,?)', [4, 1, ' Ngoại sinh nội. Công việc thuận lợi. Lợi kiến Đại Nhân. Sự thăng quan tiến chức, công việc thuận lợi. Diễn tiến chậm như chắc chắn.']);
          this.storage.executeSql('INSERT INTO tongket VALUES (?,?,?)', [4, 2, 'Âm Hoả đới Thổ xung khắc Lưu Niên Thuỷ. Hình thức bên ngoài tốt đẹp không thể hiện nội dung bên trong đang xấu.']);
          this.storage.executeSql('INSERT INTO tongket VALUES (?,?,?)', [4, 3, 'Nôi sinh Ngoại. Âm Dương tương hợp. Đi xa vui vẻ. Mọi chuyện tốt đẹp, bản thân có hao tổn, nhưng hại nhỏ, lợi lớn. Lưu ý: Đây là quẻ dự báo khi có cuộc đảo chính ở Liên Xô 1992. Hỏi (Vào giờ Tuất đúng ngày xảy ra đảo chính): Ông Tổng Thống có bị mất chức không? Trả lời: Ông ta đang ở xa, hai ngày sau về. Vẫn làm Tổng Thống. Cuộc đảo chính thất bại. Quẻ nghiệm.']);
          this.storage.executeSql('INSERT INTO tongket VALUES (?,?,?)', [4, 4, 'Âm Hoả đới Thổ vừa khắc vừa sinh Xích Khẩu Kim.']);
          this.storage.executeSql('INSERT INTO tongket VALUES (?,?,?)', [4, 5, 'Nội sinh ngoại với ý nghĩa Cảnh Âm Hỏa, Nội khắc Ngoại với ý nghĩa Cảnh Âm Thổ Khôn chính vị. Nếu Hỏa Vượng thì nội sinh ngoại. Hỏa mộ thì nội khắc ngoại. Thích hợp với du lịch, đi chơi xa. Làm ăn xa Tiểu Lợi.']);
          this.storage.executeSql('INSERT INTO tongket VALUES (?,?,?)', [4, 6, 'Âm Hoả đới Thổ sinh Vô Vong Thổ. Ngoại sinh nội. Điều kiện thuận lợi cho hoàn cảnh tự thân vốn không khả quan. Chủ quý nhân phù trợ.']);
          this.storage.executeSql('INSERT INTO tongket VALUES (?,?,?)', [4, 0, 'Âm Hoả đới Thổ sinh Vô Vong Thổ. Ngoại sinh nội. Điều kiện thuận lợi cho hoàn cảnh tự thân vốn không khả quan. Chủ quý nhân phù trợ.']);
          this.storage.executeSql('INSERT INTO tongket VALUES (?,?,?)', [5, 1, 'Đại An Thổ sinh Tử Kim. Chủ sinh xuất bất lợi. Sự nghiệp hao tổn, nhưng không đáng kể.']);
          this.storage.executeSql('INSERT INTO tongket VALUES (?,?,?)', [5, 2, 'Ngoại sinh nội. Kim Sinh Thủy. Hoàn cảnh bi đát, bế tắc dẫn đến bất lợi cho chủ thể. Chủ sự chết chóc, đau buồn. Thích hợp với những việc không chính danh. Nhưng hậu quả cũng rất xấu sau này. Thí dụ như đi buôn lậu. Gặp quẻ này sẽ thoát nạn tức thời. Nhưng cuối cùng sự việc cũng bị phanh phui. Hậu quả nặng nề. Quẻ nqaỳ khuyên người nên thận trọng, cân nhắc, suy nghĩ chín chắn trước khi quyết định công việc. Lợi cho sự im lặng, nghiên cứu, tư duy. Nhưng rất chậm.']);
          this.storage.executeSql('INSERT INTO tongket VALUES (?,?,?)', [5, 3, 'Tốc Hỷ Hoả khắc Tử Kim. Nội lục mạnh khắc chế được hoàn cảnh không thuận lợi. Chủ sự cố gắng vượt lên hoàn cảnh.']);
          this.storage.executeSql('INSERT INTO tongket VALUES (?,?,?)', [5, 4, 'Nội ngoại ngang hòa. Quẻ Thuần kim. Hình tượng của sự kiện cáo, tranh chấp quyết liệt, chiến tranh tàn khốc. Hùn hạp làm ăn bất lợi, tiền bạc hao tán. Lưu ý: Đây là quẻ xác định cuộc chiến ở Afganixtan giữa Hoa kỳ và Taliban.']);
          this.storage.executeSql('INSERT INTO tongket VALUES (?,?,?)', [5, 5, 'Tử Kim khắc Tiểu Cát Mộc. Hoàn cảnh không thuận lợi. Thiệt hại nhỏ. Chủ tình cảm suy.']);
          this.storage.executeSql('INSERT INTO tongket VALUES (?,?,?)', [5, 6, 'Nội sinh ngoại. Hoàn cảnh bế tắc, không được việc. Bi đát , hao tổn. Nhưng cuối cùng vượt qua được.']);
          this.storage.executeSql('INSERT INTO tongket VALUES (?,?,?)', [5, 0, 'Nội sinh ngoại. Hoàn cảnh bế tắc, không được việc. Bi đát , hao tổn. Nhưng cuối cùng vượt qua được.']);
          this.storage.executeSql('INSERT INTO tongket VALUES (?,?,?)', [6, 1, 'Nội sinh ngoại. Chủ sự bất ngờ ở trong bề trên có lợi cho đương số (Chủ thể coi bói). Động đất lớn nhưng không gây tác hại. Về nhà cửa thì nguy nga tráng lệ.']);
          this.storage.executeSql('INSERT INTO tongket VALUES (?,?,?)', [6, 2, 'Kinh Kim sinh Lưu Niên Thuỷ. Chủ bất ngờ suy bại lớn. Ghi chú; Đây là quẻ dự báo sóng thần Indonesia – Philippin. Website Tuvilyso.com. Những lời tiên tri 2004.']);
          this.storage.executeSql('INSERT INTO tongket VALUES (?,?,?)', [6, 3, 'Nội Khắc Ngoại. Chủ tin vui bất ngờ. Sự kiện bất ngờ. Nếu đang vui vẻ, gặp quẻ này thì niềm vui không hoàn hảo.']);
          this.storage.executeSql('INSERT INTO tongket VALUES (?,?,?)', [6, 4, 'Hai hành Kim ngang hoà. Chủ bất ngờ gây tranh chấp lớn. Về số mệnh tuỳ câu hỏi chủ bất ngờ có tài lộc lớn nhưng không dễ dàng.']);
          this.storage.executeSql('INSERT INTO tongket VALUES (?,?,?)', [6, 5, 'Ngoại khắc nội. Dương Kim khắc Mộc. Khắc sát Dương Mộc, nhưng không khắc Âm Mộc. Chủ sự bất ngờ liên quan đến, học hành , thi cử, giấy tờ....Sẽ thất tình do sự kiện bất ngờ (Trường hợp tình duyên đang nồng thắm), nhưng có tình duyên bất ngờ, hoặc chuyển biến bất ngờ về tình cảm (Nếu đang bất lợi về tình duyên).']);
          this.storage.executeSql('INSERT INTO tongket VALUES (?,?,?)', [6, 6, 'Vô Vong Âm Thổ sinh xuất Kinh Kim. Tượng vàng nổi trên mặt đất. Đem thân dâng hiến cho đời. Tuy có tiêng vang, nhưng việc không thành.']);
          this.storage.executeSql('INSERT INTO tongket VALUES (?,?,?)', [6, 0, 'Vô Vong Âm Thổ sinh xuất Kinh Kim. Tượng vàng nổi trên mặt đất. Đem thân dâng hiến cho đời. Tuy có tiêng vang, nhưng việc không thành.']);
          this.storage.executeSql('INSERT INTO tongket VALUES (?,?,?)', [7, 1, 'Đại An Thổ khắc Khai Thuỷ. Tượng nước chảy thông trên mặt đất. Từ từ, thận trong việc thành. Quẻ Dịch tương ứng Thuỷ Địa Sư.']);
          this.storage.executeSql('INSERT INTO tongket VALUES (?,?,?)', [7, 2, 'Quẻ thuần thủy. Tương đương với quẻ thuần Khảm trong Kinh Dịch. Thành đạt nhờ tư duy sâu sắc. Cần thận trọng với chính mình. Vượng vào Xuân Thu.']);
          this.storage.executeSql('INSERT INTO tongket VALUES (?,?,?)', [7, 3, 'Khai Thuỷ khắc Tốc Hỷ Hoả. Tượng dòng suối đẹp chảy ảo ạt. Mọi việc hanh thông vì tương ứng tính chất tốt của quẻ. Nhưng thành việc phải biết dừng.']);
          this.storage.executeSql('INSERT INTO tongket VALUES (?,?,?)', [7, 4, 'Nội sinh Ngoại. Chủ sự tranh luận thành công, danh tiếng. Thuận cho việc quảng cáo, du lịch, hội thảo, họp mặt; kinh doanh du lịch lữ hành, nhà hàng. Hùn hạp thành công. Đầu tư lúc đầu hao tốn nhưng sau phát triển.']);
          this.storage.executeSql('INSERT INTO tongket VALUES (?,?,?)', [7, 5, 'Khai Thuỷ sinh Tiểu Cát Mộc. Ngoịa sinh nội. Hoàn cảnh tốt cho bản thể. Phát chậm, nhưng chắc chắn.']);
          this.storage.executeSql('INSERT INTO tongket VALUES (?,?,?)', [7, 6, 'Nội khắc ngoại. Nhưng Âm Thổ không khắc Dương Thủy. Tượng nước chảy trên lòng sông. Việc hanh thông, nhưng chủ thể không lợi. Tượng của việc làm phúc, từ thiện, nên hậu vận tốt đẹp. Quẻ này tượng cho người quân tử "Lo trước cái lo của thiên hạ. Vui sau cái vui của thiên hạ". Kẻ tiểu nhân không dùng được.']);
          this.storage.executeSql('INSERT INTO tongket VALUES (?,?,?)', [7, 0, 'Nội khắc ngoại. Nhưng Âm Thổ không khắc Dương Thủy. Tượng nước chảy trên lòng sông. Việc hanh thông, nhưng chủ thể không lợi. Tượng của việc làm phúc, từ thiện, nên hậu vận tốt đẹp. Quẻ này tượng cho người quân tử "Lo trước cái lo của thiên hạ. Vui sau cái vui của thiên hạ". Kẻ tiểu nhân không dùng được.']);
          this.storage.executeSql('INSERT INTO tongket VALUES (?,?,?)', [8, 1, 'Nội khắc ngoại. Điều kiện bất lợi. kiên trì sẽ thành công.']);
          this.storage.executeSql('INSERT INTO tongket VALUES (?,?,?)', [8, 2, 'Lưỡng Thuỷ thuỷ triệt. Quẻ xấu, lo buồn thế cuộc, thời vận.']);
          this.storage.executeSql('INSERT INTO tongket VALUES (?,?,?)', [8, 3, 'Ngoại khắc nội. Nhưng Âm Thủy không khắc Dương Hỏa. Hình ảnh: Quân tử được thời (Hỏa Vượng), đem điều chính giáo hóa tiểu nhân. Thất thể (Hỏa suy) giữ mình ẩn dật. Lòng không thay đổi.']);
          this.storage.executeSql('INSERT INTO tongket VALUES (?,?,?)', [8, 4, 'Xích khẩu Kim sinh Hưu Thuỷ tù. Chủ sự lưỡng lự, tranh chấp nội bộ và không còn cơ hội.']);
          this.storage.executeSql('INSERT INTO tongket VALUES (?,?,?)', [8, 5, 'Ngoại sinh nội. Bế tắc nhất thời. sau tốt. Chủ sự kiên trì sẽ thành công.']);
          this.storage.executeSql('INSERT INTO tongket VALUES (?,?,?)', [8, 6, 'Tượng nước chảy ngầm dưới đất. Không dùng được việc gì.']);
          this.storage.executeSql('INSERT INTO tongket VALUES (?,?,?)', [8, 0, 'Tượng nước chảy ngầm dưới đất. Không dùng được việc gì.']);
          this.storage.executeSql('INSERT INTO tongket VALUES (?,?,?)', [0, 1, 'Nội khắc ngoại. Điều kiện bất lợi. kiên trì sẽ thành công.']);
          this.storage.executeSql('INSERT INTO tongket VALUES (?,?,?)', [0, 2, 'Lưỡng Thuỷ thuỷ triệt. Quẻ xấu, lo buồn thế cuộc, thời vận.']);
          this.storage.executeSql('INSERT INTO tongket VALUES (?,?,?)', [0, 3, 'Ngoại khắc nội. Nhưng Âm Thủy không khắc Dương Hỏa. Hình ảnh: Quân tử được thời (Hỏa Vượng), đem điều chính giáo hóa tiểu nhân. Thất thể (Hỏa suy) giữ mình ẩn dật. Lòng không thay đổi.']);
          this.storage.executeSql('INSERT INTO tongket VALUES (?,?,?)', [0, 4, 'Xích khẩu Kim sinh Hưu Thuỷ tù. Chủ sự lưỡng lự, tranh chấp nội bộ và không còn cơ hội.']);
          this.storage.executeSql('INSERT INTO tongket VALUES (?,?,?)', [0, 5, 'Ngoại sinh nội. Bế tắc nhất thời. sau tốt. Chủ sự kiên trì sẽ thành công.']);
          this.storage.executeSql('INSERT INTO tongket VALUES (?,?,?)', [0, 6, 'Tượng nước chảy ngầm dưới đất. Không dùng được việc gì.']);
          this.storage.executeSql('INSERT INTO tongket VALUES (?,?,?)', [0, 0, 'Tượng nước chảy ngầm dưới đất. Không dùng được việc gì.']);
        });
        this.isOpen = true;
      });
    }
  }

  public getBatMon(id) {
    return new Promise((resolve, reject) => {
      this.storage.executeSql('SELECT * FROM batmon where id = ?', [id]).then((data) => {
        let batmon = [];
        if (data.rows.length > 0) {
          for (let i = 0; i < data.rows.length; i++) {
            batmon.push({
              id: data.rows.item(i).id,
              name: data.rows.item(i).name,
              details: data.rows.item(i).details
            });
          }
        }
        resolve(batmon);
      }, (error) => {
        reject(error);
      });
    });
  }

  public createPerson(firstname: string, lastname: string) {
    return new Promise((resolve, reject) => {
      this.storage.executeSql('INSERT INTO people (firstname, lastname) VALUES (?, ?)', [firstname, lastname]).then((data) => {
        resolve(data);
      }, (error) => {
        reject(error);
      });
    });
  }

}

