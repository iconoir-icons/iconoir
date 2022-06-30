import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class OpenBook extends StatelessWidget {
  const OpenBook({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/OpenBook.svg');
}
