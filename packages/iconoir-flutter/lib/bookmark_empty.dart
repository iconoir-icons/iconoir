import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class BookmarkEmpty extends StatelessWidget {
  const BookmarkEmpty({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/BookmarkEmpty.svg');
}
