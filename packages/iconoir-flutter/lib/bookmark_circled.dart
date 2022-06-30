import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class BookmarkCircled extends StatelessWidget {
  const BookmarkCircled({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/BookmarkCircled.svg');
}
