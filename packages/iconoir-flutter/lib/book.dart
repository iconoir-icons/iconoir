import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Book extends StatelessWidget {
  const Book({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Book.svg');
}
