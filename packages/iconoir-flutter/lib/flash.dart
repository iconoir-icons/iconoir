import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Flash extends StatelessWidget {
  const Flash({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Flash.svg');
}
