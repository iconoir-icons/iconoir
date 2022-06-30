import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class BookmarkBook extends StatelessWidget {
  const BookmarkBook({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/BookmarkBook.svg');
}
