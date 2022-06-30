import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class LockedBook extends StatelessWidget {
  const LockedBook({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/LockedBook.svg');
}
