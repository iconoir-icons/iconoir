import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class BookStack extends StatelessWidget {
  const BookStack({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/BookStack.svg');
}
